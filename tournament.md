---
layout: default
permalink: /dgl
title: Defense Grid League
---

<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12 center-align">
            <img class="header-img responsive-img" id="logo" src="/assets/img/DGL_Logo.png"/>
            <h4 class="logo-text">Defense Grid League</h4>
            <h6 class="logo-text">Ambition & Glory</h6>
            <br>
            <div class="divider red-shadow"></div>
            <br>
        </div>
        <div class="col s12 m12 l12">
            <h4>Teams</h4>
        </div>
        {% for team in site.data.tournament.teams %}
            <div class="col s12 m4 l3 center-align" id="col1-{{forloop.index}}">
            {% if team.ready == true or team.ready == 'yes' %}
                <div class="card red-shadow">
            {% else %}
                <div class="card">
            {% endif %}
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4 logo-text">{{team.name}}</span>
                        <h6 class="logo-text">{{team.captain}}</h6>
                    </div>
                </div>
            </div>
        {% endfor %}
        <div class="col s12 m12 l12">
            <br>
            <div class="divider"></div>
            <h4>Mechanics</h4>
            <h6><b>1</b>. Elect Captains</h6><br>
            <h6><b>2</b>. Captains will build a team of 3-5 club members that should not exceed the recommended team elo</h6>
            &emsp;<h7><b>a</b>. Check your team's elo in the <u><a href="{{site.url}}/team-creator">Team Creator</a></u></h7><br>
            &emsp;<h7><b>b</b>. If successful, please take a screenshot and send it on <u><a href="{{site.url}}/#chat">Discord</a></u> in the #submissions channel</h7><br>
            &emsp;<h7><b>c</b>. Once everything is successful, your team name will be updated in this page</h7><br><br>
            <h6><b>3</b>. Game Modes are chosen for every battle and will have a pool meta brawlers. More details below.</h6><br>
            <h6><b>4</b>. Both teams record the results of the battle and the winner shall submit the result on Discord</h6><br>
            <h6><b>5</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
            <h6><b>6</b>. Hall of Fame</h6>
            &emsp;<h7><b>a</b>. Champion Team</h7><br>
            &emsp;<h7><b>b</b>. Best Captain</h7><br>
            &emsp;<h7><b>c</b>. Most Valuable Player</h7><br>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider"></div>
            <h4>Battle</h4>
            <h5>Score Board</h5>
            <table class="responsive-table centered highlight">
                <thead>
                    <tr>
                        <th></th>
                        {% for team in site.data.tournament.teams %}
                        {% if team.ready == true or team.ready == 'yes' %}
                        <th>{{team.name}}</th>
                        {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for mode in site.data.tournament.modes %}
                    <tr>
                        <th>{{mode.name}}</th>
                        {% for result in mode.results %}
                        <td>{{result}}</td>
                        {% endfor %}
                    </tr>
                    {% endfor %}
                </tbody>
            </table>
            <br>
            <h5>Battle Mechanics</h5>
            <h6><b>1</b>. For each game mode, teams will do a round-robin match that will last for 1 week</h6>
            &emsp;<h7><b>a</b>. Team 1 vs Team 2</h7><br>
            &emsp;<h7><b>b</b>. Team 3 vs Team 4</h7><br>
            &emsp;<h7><b>c</b>. Team 1 vs Team 3</h7><br>
            &emsp;<h7><b>d</b>. Team 2 vs Team 4</h7><br>
            &emsp;<h7><b>e</b>. Team 1 vs Team 4</h7><br>
            &emsp;<h7><b>f</b>. Team 2 vs Team 3</h7><br><br>
            <h6><b>2</b>. Captains will agree on which map to use on the chosen game mode at least 1 day before the battle</h6><br>
            <h6><b>3</b>. For each map, a team can choose from the list meta brawlers</h6>
            &emsp;<h7><b>a</b>. <i>Draft</i> &ndash; Both teams choose 1-3 meta brawlers from the pool below. The 2nd and 3rd brawler can be any brawler</h7><br>
            &emsp;<h7><b>b</b>. <i>Mirror</i> &ndash; Both teams agree to pick the same set of brawlers from the pool</h7><br><br>
            <h6><b>4</b>. Pointing System</h6>
            &emsp;<h7><b>a</b>. <i>Match Winner</i> &ndash; The Winner gets 5 points while the Loser gets 3 points</h7><br>
            &emsp;<h7><b>b</b>. <i>Meta Bonus</i> &ndash; A complete meta composition gets you 5 points; One Brawler less is 1 point less</h7><br>
            &emsp;<h7><b>c</b>. <i>Game Mode Score</i> &ndash; The highest score achieved in the round-robin will be the one recorded in the Score Board</h7><br><br>
            <h6><b>5</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider"></div>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.tournament.modes %}
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
    </div>
    <br><br>
</div>