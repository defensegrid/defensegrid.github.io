$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/assets/etc/bs_elo.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

let data_map = new Map();
var TOO_OP = 2;
var REWORK = 0;
var SUCCESS = 1;
var ERROR = 100;
var ERROR_STRING = "There seems to be a problem... Please check your input and try again";

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');

        if(data[1] > 0){
            data_map.set(String(data[0]), parseFloat(data[1]));
        }
    }
    console.log(data_map);
}

function calculateTeamElo(team) {
    var members = team.split(',');

    total_elo = 0;
    if (members.length < 3)
    {
        ERROR_STRING = "Please recruit more members. Your current team size is " + members.length;
        return ERROR;
    }

    for (var i = 0; i < members.length; i++){
        parsed = String(members[i]).trim();
        result = data_map.get(parsed)
        
        if(result == undefined)
        {
            ERROR_STRING = "Please check for mistyped some characters. We can't find the player with tag: " + parsed;
            return ERROR;
        }

        total_elo += result;
    }

    team_elo = total_elo / members.length;
    mean = data_map.get("DEFENSE_GRID_MEAN");
    stdev = data_map.get("DEFENSE_GRID_STDEV");
    ceiling = mean + (stdev / 1.5);
    floor = mean - (stdev / 4);
    console.log(ceiling);
    console.log(floor);
    console.log(team_elo);
    if(team_elo > ceiling)
    {
        return TOO_OP;
    }

    if(team_elo < floor)
    {
        return REWORK;
    }

    return SUCCESS;
}