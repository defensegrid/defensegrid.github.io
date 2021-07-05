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
var TOO_OP = 2;
var REWORK = 0;
var SUCCESS = 1;
var ERROR = 100;
var ERROR_STRING = "There seems to be a problem... Please check your input and try again";
var PLAYERS = "";

function processElo(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

        data_map.set(String(data[0]), [parseFloat(data[2]), parseFloat(data[3])]);
        player_map.set(String(data[1]), String(data[0]));
        key_list[data[0]] = null;
        key_list[data[1]] = null;
    }

    console.log(player_map)
}

function processStat(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        stat_map.set(String(data[0]), parseFloat(data[1]))
    }

    console.log(stat_map)
}

function getKeyList() {
    return key_list;
}

function calculateTeamElo(team) {
    PLAYERS = ""
    var members = team.split(',');
    var member_count = 0;

    total_wxr = 0;
    total_vss = 0;

    for (var i = 0; i < members.length; i++){
        parsed = String(members[i]).trim();
        if (parsed.length == 0) {
            continue
        }
        console.log(parsed)

        if (parsed[0] == "#") {
            parsed = player_map.get(parsed)
        }

        console.log("parsed: " + parsed)
        result = data_map.get(parsed)
        console.log("res: " + result)
        
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

    PLAYERS = PLAYERS.substr(PLAYERS.length-3)

    team_wxr = total_wxr / member_count;
    team_vss = total_vss / member_count;
    min_wxr = stat_map.get("WXR_MIN");
    min_vss = stat_map.get("VSS_MIN");
    limit_wxr = stat_map.get("WXR_LIMIT");
    limit_vss = stat_map.get("VSS_LIMIT");

    console.log(team_wxr)
    console.log(min_wxr)
    console.log(limit_wxr)
    console.log(team_vss)
    console.log(min_vss)
    console.log(limit_vss)

    if(team_vss > limit_vss || team_wxr > limit_wxr)
    {
        return TOO_OP;
    }

    if(team_vss < min_vss || team_wxr < min_wxr)
    {
        return REWORK;
    }

    return SUCCESS;
}