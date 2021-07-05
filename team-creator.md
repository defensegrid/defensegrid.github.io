---
layout: dgl
permalink: /team-creator
title: Team Creator
---

<div class="row">
    <div class="col s12 center-align bg-defense-grid">
        <h4 class="logo-text">Team Creator</h4>
        <h6 class="logo-sub-text">Specialized & Balanced</h6>
        <br>
    </div>
</div>
<div class="container">
    <div class="row" id="page_filler">
        <div class="col s12">
            <p class="flow-text">
                We value fairness in every competition<br>
                <br>
                Please enter the tag or name of each member of your team, so we can start the calculation<br>
                <small>ⓘ Tags are located below the profile name</small>
            </p>
        </div>
    </div>
    <div class="row" id="result_success_bal" hidden>
        <div class="col s12">
            <h4>Congratulations!</h4>
            <h5>You have created a balanced team!</h5>
            <h4 id="balanced"></h4><br><br>
        </div>
    </div>
    <div class="row" id="result_success_spe" hidden>
        <div class="col s12">
            <h4>Congratulations!</h4>
            <h5>You have created a specialized team!</h5>
            <h4 id="specialized"></h4><br><br>
        </div>
    </div>
    <div class="row" id="result_op" hidden>
        <div class="col s12">
            <h4 id="op">Your team is TOO OP!</h4>
            <h5>Consider teaming up with other participants.</h5><br><br>
        </div>
    </div>
    <div class="row" id="result_stacked" hidden>
        <div class="col s12">
            <h4 id="stacked">Can you please stop stacking? 🛑</h4>
            <h5>Consider teaming up with other participants.</h5><br><br>
        </div>
    </div>
    <div class="row" id="result_rework" hidden>
        <div class="col s12">
            <h5>Your team needs more experienced players.</h5>
            <h5>Consider teaming up with other participants.</h5><br><br>
        </div>
    </div>
    <div class="row" id="result_error" hidden>
        <div class="col s12">
            <h5 id="error"></h5><br><br>
        </div>
    </div>
    <div class="row" id="team_code_cont" hidden>
        <div class="col s12">
            <h5 id="team_code"></h5><br><br>
        </div>
    </div>
    <div class="row">
        <form id="search_form">
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix">person_outline</i>
              <input id="p1" type="text" class="autocomplete">
              <label for="p1">Player 1</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix">person_outline</i>
              <input id="p2" type="text" class="autocomplete">
              <label for="p2">Player 2</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix">person_outline</i>
              <input id="p3" type="text" class="autocomplete">
              <label for="p3">Player 3</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix">person_outline</i>
              <input id="p4" type="text" class="autocomplete">
              <label for="p4">(Optional) Player 4</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix">person_outline</i>
              <input id="p5" type="text" class="autocomplete">
              <label for="p5">(Optional) Player 5</label>
            </div>
            <div class="col s7 m3 l3"></div>
            <div class="input-field col right-align s5 m3 l3">
                <button class="btn waves-effect waves-light grey darken-4" type="submit">Create
                    <i class="material-icons right">science</i>
                </button>
            </div>
        </form>
    </div>
    <br>
    <br>
    <br>
</div>

<script type="text/javascript" src="/assets/js/calculator.js"></script>
<script type="text/javascript" src="/assets/js/bin/lz-string.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.autocomplete');
        var list = getKeyList();
        var options = {
            data: list,
            limit: 2,
            minLength: 2,
        };
        var instances = M.Autocomplete.init(elems, options);
    })

    $( "#search_form" ).submit(function( event ) {
        event.preventDefault();
        $("#result_error").hide();
        $("#result_op").hide();
        $("#result_stacked").hide();
        $("#result_rework").hide();
        $('#result_success_bal').hide();
        $('#result_success_spe').hide();
        $("#page_filler").hide();

        var str = ""
        var team_size = 0
        for (let i = 1; i < 6; i++) {
            var key = "#p" + String(i) 
            var val = $(key).val()

            if (val.length > 0) {
                str += val + ","
                team_size++
            }
        }

        if (team_size < 3) {
            ERROR_STRING = "Your team should have 3-5 members. Please recruit more!"
            $("#result_error").show();
            $("#error").text(ERROR_STRING);
            return;
        }

        var calculation = calculateTeamElo(str);
        var code = LZString.compressToEncodedURIComponent(str);
        const code_text = "YOUR TEAM CODE IS: "

        if(calculation == ERROR)
        {
            $("#result_error").show();
            $("#error").text(ERROR_STRING);
            return;
        }

        if(calculation == TOO_OP)
        {
            $("#result_op").show();
            $("#op").text(PLAYERS + " is TOO OP!")
            return;
        }
        
        if(calculation == STACKED)
        {
            $("#result_stacked").show();
            return;
        }

        if(calculation == REWORK)
        {
            $("#result_rework").show();
            return;
        }

        if(calculation == SUCCESS_BAL)
        {
            $('#result_success_bal').show();
            $("#balanced").text(PLAYERS);
        }

        if(calculation == SUCCESS_SPE)
        {
            $('#result_success_spe').show();
            $("#specialized").text(PLAYERS);
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });
</script>

