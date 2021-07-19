---
layout: default
permalink: /dgl1
title: Defense Grid League
---

<div class="row">
    <div class="col s12 m12 l12 center-align bg-dark-gray">
        <a href="{{site.url}}/dgl"><img class="header-img responsive-img" id="logo" src="/assets/img/DGL_Logo.png"/></a>
        <h4 class="logo-text">Defense Grid League</h4>
        <h6 class="logo-sub-text">Ambition & Glory</h6>
        <br>
        <br>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col s12 m12 l12">
            <h4>Teams</h4>
        </div>
        {% for team in site.data.tournament.s1teams %}
            <div class="col s12 m4 l3 center-align" id="col1-{{forloop.index}}">
            {% if team.ready == true or team.ready == 'yes' %}
                <div class="card red-shadow">
            {% else %}
                <div class="card">
            {% endif %}
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4 logo-text">{{team.name}}</span>
                        <h6 class="logo-sub-text">{{team.captain}}</h6>
                    </div>
                </div>
            </div>
        {% endfor %}
        <br><br>
        <div class="col s12 m12 l12">
        <h5>Score Board</h5>
            <table class="responsive-table centered striped">
                <thead>
                    <tr>
                        <td></td>
                        {% for team in site.data.tournament.s1teams %}
                        {% if team.ready == true or team.ready == 'yes' %}
                        <th><i><sup>{{team.placement}}</sup></i> {{team.name}}</th>
                        {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for mode in site.data.tournament.s1modes %}
                    <tr>
                        <th>{{mode.name}}</th>
                        {% for result in mode.results %}
                        <td>{{result}}</td>
                        {% endfor %}
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
        </div>
            <br>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider gray-shadow full-width"></div>
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.tournament.s1modes %}
        <div class="col s12 m12 l12" id="col2-{{forloop.index}}">
            <h5><b>{{mode.name}}</b></h5>
            {% for submode in mode.submodes %}
            <div class="card">
                <div class="card-content">
                    <span class="card-title black-text text-darken-4 logo-text">{{submode.name}}</span>
                    <br>
                    <div class="row">
                    {% for restriction in submode.restrictions %}
                    <div class="col s4 m2 l1">
                        <img class="responsive-img" style="max-width:70px" src="/assets/img/restrictions/{{restriction}}.png" alt="{{restriction}}">
                    </div>
                    {% endfor %}
                    </div>
                </div>
            </div>
            <br>
            {% endfor %}
        </div>
        <br>
        {% endfor %}
        <div class="col s12 m12 l12">
            <br>
            <div class="divider gray-shadow full-width"></div>
            <br>
            <h4>Mechanics</h4>
            <h6><b>1</b>. Elect Captains</h6><br>
            <h6><b>2</b>. Captains will build a team of 3-5 club members that should not exceed the recommended team elo</h6>
            &emsp;<h7><b>a</b>. Check your team's elo in the <u><a href="{{site.url}}/team-creator">Team Creator</a></u></h7><br>
            &emsp;<h7><b>b</b>. If successful, please take a screenshot and send it on <u><a href="{{site.url}}/#chat">Discord</a></u> in the #events channel</h7><br>
            &emsp;<h7><b>c</b>. Once everything is successful, your team name will be updated in this page</h7><br><br>
            <h6><b>3</b>. Game Modes are chosen for every battle and will have restrictions</h6><br>
            <h6><b>4</b>. Both teams record the results of the battle and the winner shall submit the result on Discord</h6><br>
            <h6><b>5</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            &emsp;<h7><b>a</b>. Champion Team</h7><br>
            &emsp;<h7><b>b</b>. Best Captain</h7><br>
            &emsp;<h7><b>c</b>. Most Valuable Player</h7><br>
            &emsp;<h7><b>d</b>. Unrivaled Strategist</h7><br>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider gray-shadow full-width"></div>
            <br>
            <h4>Battle</h4>
            <h5>Battle Mechanics</h5>
            <h6><b>1</b>. For each round, teams will do a best of three match in one map</h6><br>
            <h6><b>2</b>. Matchups and Game Modes are <i>cycled per round</i></h6>
            <h7><b>Cycle 1 </b></h7><br>
            &emsp;<h7><b>a</b>. Alpha Gang <i>vs.</i> Tilt Squad</h7><br>
            &emsp;<h7><b>b</b>. Blaze Walkers <i>vs.</i> Potentia Imperium</h7><br><br>
            <h7><b>Cycle 2</b></h7><br>
            &emsp;<h7><b>a</b>. Alpha Gang <i>vs.</i> Blaze Walkers</h7><br>
            &emsp;<h7><b>b</b>. Tilt Squad <i>vs.</i> Potentia Imperium</h7><br><br>
            <h7><b>Cycle 3</b></h7><br>
            &emsp;<h7><b>a</b>. Alpha Gang <i>vs.</i> Potentia Imperium</h7><br>
            &emsp;<h7><b>b</b>. Tilt Squad <i>vs.</i> Blaze Walkers</h7><br><br>
            <h6><b></b> Captains will agree on which map to use in the current game mode at least 2 days before the 1st battle</h6>
            {% for mode in site.data.tournament.s1modes %}
            &emsp;<h7><b>Cycle {{forloop.index}}</b>&emsp;{{mode.name}}</h7><br>
            {% endfor %}
            <br>
            <h6><b>3</b>. For each map, a team can choose from the list meta brawlers</h6><br>
            <h6><b>4</b>. Collection Stage (5 Rounds)</h6>
            &emsp;<h7><b>a</b>. <i>Match Winner</i> &ndash; The Winner gets 7 points while the Loser gets 2 points. For Draws, both teams gets 5 points</h7><br>
            &emsp;<h7><b>b</b>. <i>Meta Bonus</i> &ndash; A complete meta composition gives your team 3 more points; One brawler less is 1 point less</h7><br>
            &emsp;<h7><b>c</b>. <i>Non-Meta Bonus</i> &ndash; Not losing and having at least 1 non-meta brawler gives your team 5 more points</h7><br>
            &emsp;<h7><b>d</b>. <i>Round Score</i> &ndash; The highest score achieved in the whole round will be the one recorded. Max points is 10 points</h7><br><br>
            <h6><b>5</b>. Final Stage</h6>
            &emsp;<h7><b>a</b>. Initial placements will be ordered based on the sum of points gathered by a team from each round in the collection stage</h7><br>
            &emsp;<h7><b>b</b>. A winning team can <i>steal the placement</i> from a matched team, if they are not 20 points ahead. Additionally, the winner steals the betted number points (3-10) from the loser, after deciding on their new placement</h7><br>
            &emsp;<h7><b>c</b>. A battle can only take place if both teams agreed on a bet. Moreover, a team can't turn down a battle with the least bet (3), if they are not 10 points ahead</h7><br>
            &emsp;<h7><b>d</b>. <i>Finals can only end if no battles happened for 2 consecutive rounds</i>. Matchup and Game Mode order will continue from the last cycle</h7><br><br>
            <h6><b>6</b>. Unusual Scenarios</h6>
            &emsp;<h7><b>a</b>. <i>Sudden Game Interruption</i> &ndash; An interrupted match can be repeated if the both teams agree</h7><br>
            &emsp;<h7><b>b</b>. <i>No-Show</i> &ndash; A team that does not show up and has 2 or more strikes will lose by default</h7><br>
            &emsp;<h7><b>c</b>. <i>Dishonest Acts</i> &ndash; Every dishonest act will penalize a team by 10 points</h7><br><br><br>
        </div>
        <br>
    </div>
</div>