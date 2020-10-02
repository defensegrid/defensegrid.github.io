---
layout: default
permalink: /team-creator
title: Team Creator
---

<div class="container">
    <div class="row">
        <div class="col s12">
            <h4 class="logo-text">Team Creator</h4>
            <h6 class="logo-sub-text">Relevance & Balance</h6>
        </div>
    </div>
    <div class="row">
        <form id="search_form" class="col s12">
            <div class="input-field col s12">
              <i class="material-icons prefix">calculate</i>
              <input id="search_event" type="text" class="validate">
              <label for="search_event">#TAG_1, #TAG_2, #TAG_3, #TAG_4 ...</label>
            </div>
        </form>
    </div>
    <div class="row" id="page_filler">
        <div class="col s12">
            <p class="flow-text">
                We value fairness in every competition. That is why we ensure balanced teams by calculating it from relevant views<br>
                <br>
                Please enter the tag of each member of your team separated by a comma<i>(,)</i> in the input field above so we can start the calculation<br>
                &emsp;<small>e.g.&ensp;#TAG_1, #TAG_2, #TAG_3 </small><br>
                <br>
                <i>Tags are located below the profile name</i>
                <br>
                <br>
            </p>
        </div>
    </div>
    <div class="row" id="result_success" hidden>
        <div class="col s12">
            <h4>Congratulations!</h4>
            <h5>You have successfully created a balanced team!</h5>
            <h5 id="members"></h5><br><br>
        </div>
    </div>
    <div class="row" id="result_op" hidden>
        <div class="col s12">
            <h4>Your team is TOO OP!</h4>
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
</div>

<script type="text/javascript" src="/assets/js/calculator.js"></script>

<script>
    $( "#search_form" ).submit(function( event ) {
        var str = $("#search_event").val()
        event.preventDefault();

        var calculation = calculateTeamElo(str);

        if(calculation == ERROR)
        {
            $("#result_error").show();
            $("#error").text(ERROR_STRING);
            $("#result_op").hide();
            $("#result_rework").hide();
            $('#result_success').hide();
            $("#page_filler").hide();
            return;
        }

        if(calculation == TOO_OP)
        {
            $("#result_op").show();
            $("#result_rework").hide();
            $("#result_error").hide();
            $('#result_success').hide();
            $("#page_filler").hide();
            return;
        }
        
        if(calculation == REWORK)
        {
            $("#result_rework").show();
            $("#result_error").hide();
            $("#result_op").hide();
            $('#result_success').hide();
            $("#page_filler").hide();
            return;
        }

        if(calculation == SUCCESS)
        {
            $('#result_success').show();
            $("#members").text(str);
            $("#result_rework").hide();
            $("#result_error").hide();
            $("#result_op").hide();
            $("#page_filler").hide();
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });
</script>

