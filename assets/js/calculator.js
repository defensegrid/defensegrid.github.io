$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/assets/etc/bs_elo.csv",
        dataType: "text",
        success: function(data) {processElo(data);}
     });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/assets/etc/bs_stat.csv",
        dataType: "text",
        success: function(data) {processStat(data);}
     });
});

let data_map = new Map();
let player_map = new Map();
let stat_map = new Map();
var key_list = [];
var TOO_OP = 100;
var STACKED = 1000;
var REWORK = 0;
var SUCCESS_BAL = 1;
var SUCCESS_SPE_WXR = 2;
var SUCCESS_SPE_VSS = 3;
var SUCCESS_BELOW_MEAN_WXR = 4;
var SUCCESS_BELOW_MEAN_VSS = 5;
var ERROR = -1;
var ERROR_STRING = "There seems to be a problem... Please check your input and try again";
var PLAYERS = "";

function processElo(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split('£');

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split('£');

        data_map.set(String(data[0]), [parseFloat(data[2]), parseFloat(data[3])]);
        player_map.set(String(data[1]), String(data[0]));
        key_list[data[0]] = null;
        key_list[data[1]] = null;
    }

    console.log(data_map)
}

function processStat(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split('£');

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split('£');
        stat_map.set(String(data[0]), parseFloat(data[1]))
    }
}

function getKeyList() {
    return key_list;
}

function calculateTeamElo(team) {
    PLAYERS = ""
    var members = team.split('£');
    var member_count = 0;

    total_wxr = 0;
    total_vss = 0;

    for (var i = 0; i < members.length; i++){
        parsed = String(members[i]).trim();
        if (parsed.length == 0) {
            continue
        }

        if (parsed[0] == "#") {
            parsed = player_map.get(parsed)
        }

        if (PLAYERS.search(parsed) != -1) {
            ERROR_STRING = parsed + " was entered more than once";
            return ERROR;
        }

        // console.log("parsed: " + parsed)
        result = data_map.get(parsed)
        // console.log("res: " + result)
        
        if (result == undefined)
        {
            ERROR_STRING = parsed + " is not registered";
            return ERROR;
        }

        if (result[0] == NaN) {
            return ERROR; 
        }

        total_wxr += result[0];
        total_vss += result[1];
        member_count += 1;
        PLAYERS += parsed + " + ";
    }

    PLAYERS = PLAYERS.substr(0,PLAYERS.length-3)

    team_wxr = total_wxr / member_count;
    team_vss = total_vss / member_count;
    min_wxr = stat_map.get("WXR_MIN");
    min_vss = stat_map.get("VSS_MIN");
    mean_wxr = stat_map.get("WXR_MEAN");
    mean_vss = stat_map.get("VSS_MEAN");
    std_wxr = stat_map.get("WXR_STD");
    std_vss = stat_map.get("VSS_STD");
    limit_wxr = stat_map.get("WXR_LIMIT");
    limit_vss = stat_map.get("VSS_MIN");
    ulimit_wxr = mean_wxr + std_wxr;
    ulimit_vss = mean_vss + std_vss;

    // console.log(team_wxr)
    // console.log(std_wxr)
    // console.log(mean_wxr)
    // console.log(min_wxr)
    // console.log(limit_wxr)
    // console.log(ulimit_wxr)
    // console.log("-------")
    // console.log(team_vss)
    // console.log(std_vss)
    // console.log(mean_vss)
    // console.log(min_vss)
    // console.log(limit_vss)
    // console.log(ulimit_vss)

    if (team_vss > ulimit_vss && team_wxr > ulimit_wxr) {
        return STACKED;
    }

    if (team_vss > ulimit_vss && team_wxr > min_wxr) {
        return TOO_OP;
    }

    if (team_wxr > ulimit_wxr && team_vss > min_vss) {
        return TOO_OP;
    }

    if (team_vss < mean_vss && team_wxr < mean_wxr) {
        return REWORK;
    }

    if (team_vss < min_vss && team_wxr > limit_wxr) {
        return SUCCESS_SPE_WXR;
    }

    if (team_wxr < min_wxr && team_vss > limit_vss) {
        return SUCCESS_SPE_VSS;
    }

    if (team_wxr < mean_wxr) {
        return SUCCESS_BELOW_MEAN_WXR;
    }

    if (team_vss < mean_vss) {
        return SUCCESS_BELOW_MEAN_VSS;
    }

    return SUCCESS_BAL;
}
