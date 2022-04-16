---
layout: default
permalink: /dgl2ps
title: Defense Grid League
---

<div class="row">
    <div class="col s12 m12 l12 center-align bg-defense-grid">
        <a href="{{site.url}}/dgl1"><img class="header-img responsive-img" id="logo" src="/assets/img/DGL2_Circle.png"/></a>
        <h4 class="logo-text">Defense Grid League</h4>
        <h6 class="logo-sub-text">Ambition & Glory</h6>
        <br>
        <br>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        <br>
        {% for event in site.data.brawl-events.brawl-events %}
        {% if event.name != "Template" and event.name != "template"%}
        {% if event.status == "published"%}
            {% if event.gamemode == "DGL Mode"%}
            <div class="col s12 m4 l3">
                {% assign index = forloop.index | minus: 6 %}
                {% assign switch = index | modulo: 4 %}
                {% if switch == 0 %}
                <div class="card dgl2-card">
                {% elsif switch == 1 %}
                <div class="card dgl2-card-var2">
                {% elsif switch == 2 %}
                <div class="card dgl2-card-var3">
                {% elsif switch == 3 %}
                <div class="card dgl2-card-var4">
                {% endif %}
                    <a class="activator" href="{{site.url}}/{{event.link}}">
                    <div class="card-content">
                        <span class="card-title logo-text">{{event.name}}</span>
                        <h6 class="logo-sub-text">{{event.description}}</h6>
                    </div>
                    </a>
                </div>
            </div>
            {% endif %}
            {% if event.gamemode == "Hidden DGL Mode"%}
            <div class="col s12 m4 l3">
                <div class="card gray-shadow">
                    <div class="card-content">
                        <span class="card-title logo-text">{{event.description}}</span>
                        <h6 class="logo-sub-text">{{event.name}}</h6>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endif %}
        {% endif %}
        {% endfor %}
        <br>
        <div class="col s12 m12 l12">
        <br>
        <h4>Score Board</h4>
            <table class="responsive-table centered striped">
                <thead>
                    <tr>
                        <td></td>
                        {% for team in site.data.tournament.s2teams %}
                        {% if team.ready == true or team.ready == 'yes' %}
                        <th><i><sup>{{team.placement}}</sup></i> {{team.name}}</th>
                        {% endif %}
                        {% endfor %}
                    </tr>
                </thead>
                <tbody>
                    {% for mode in site.data.tournament.s2modes %}
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
            <h4>Point System</h4>
        </div>
        <br>
        <div class="row">
            <div class="col s12 m6 l4 center-align">
                <h5>Synergy</h5>
                <table class="responsive-table centered striped">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Home</th>
                            <th>Away</th>
                            <th>FB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Win</th>
                            <td>+4</td>
                            <td>+8</td>
                            <td>+6</td>
                        </tr>
                        <tr>
                            <th>Loss</th>
                            <td>-4</td>
                            <td>-2</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <th>OTW</th>
                            <td>+2</td>
                            <td>+4</td>
                            <td>+3</td>
                        </tr>
                        <tr>
                            <th>OTL</th>
                            <td>-2</td>
                            <td>+0</td>
                            <td>-1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col s12 m6 l4 center-align">
                <h5>Relay</h5>
                <table class="responsive-table centered striped">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Home</th>
                            <th>Away</th>
                            <th>FB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Win</th>
                            <td>+2</td>
                            <td>+5</td>
                            <td>+3</td>
                        </tr>
                        <tr>
                            <th>2K</th>
                            <td>+1</td>
                            <td>+4</td>
                            <td>+2</td>
                        </tr>
                        <tr>
                            <th>1K</th>
                            <td>+0</td>
                            <td>+2</td>
                            <td>+1</td>
                        </tr>
                        <tr>
                            <th>0K</th>
                            <td>-1</td>
                            <td>+0</td>
                            <td>+0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col s12 m6 l4 center-align">
                <h5>Haven</h5>
                <table class="responsive-table centered striped">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Home</th>
                            <th>Away</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><1.5m</th>
                            <td>-3</td>
                            <td>+11</td>
                        </tr>
                        <tr>
                            <th><2m</th>
                            <td>-1</td>
                            <td>+7</td>
                        </tr>
                        <tr>
                            <th>OTW</th>
                            <td>+5</td>
                            <td>+4</td>
                        </tr>
                        <tr>
                            <th>OTL</th>
                            <td>+3</td>
                            <td>+2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col s12 m6 l4 center-align">
                <h5>Blitz</h5>
                <table class="responsive-table centered striped">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1st</th>
                            <td>+5</td>
                        </tr>
                        <tr>
                            <th>2-3</th>
                            <td>+3</td>
                        </tr>
                        <tr>
                            <th>Mid</th>
                            <td>+0.5</td>
                        </tr>
                        <tr>
                            <th>Half</th>
                            <td>-1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider gray-shadow full-width"></div>
            <br>
            <h4>Overall System</h4>
            <h6><b>1</b>. <u><a href="{{site.url}}/team-creator">Build a Team</a></u> of 3-5 players</h6>
            &emsp;<h7><b>a</b>. Consider a variety of skills, as all Game Modes provide <i>equal points</i></h7><br>
            &emsp;<h7><b>b</b>. Consider a balanced team, as Game Modes have <i>bans and rotations</i></h7><br>
            &emsp;<h7><b>c</b>. Test your team in <u><a href="{{site.url}}/team-creator">Team Creator</a></u></h7><br>
            &emsp;<h7><b>d</b>. Consider choosing a <i>Captain</i>, leading is important</h7><br>
            &emsp;<h7><b>e</b>. If successful and your team is confident, submit the result on <u><a href="{{site.url}}/#chat">Discord</a></u> with your <i>Team Name</i></h7><br>
            &emsp;<h7><b>f</b>. Once everything is verified, your new team will be announced to all</h7><br>
            &emsp;<h7> <small>ⓘ Your team can be recreated anytime</small></h7><br><br>
            <h6><b>2</b>. Battle with another player or team in an assigned Game Mode</h6>
            &emsp;<h7><b>a</b>. The battle will be announced every Sunday</h7><br>
            &emsp;<h7><b>b</b>. The battle should be finished on the (same week) or the (week after) it was announced</h7><br>
            &emsp;<h7><b>c</b>. All participants will agree on a specific time and day of battle, ideally on Weekends</h7><br>
            &emsp;<h7><b>d</b>. Battles can be requested to be redone (once) by a player or team that had issues during the battle</h7><br><br>
            <h6><b>3</b>. Both teams record the results of the battle and the winner shall submit the result on <u><a href="{{site.url}}/#chat">Discord</a></u></h6><br>
            <h6><b>4</b>. Hosts will verify the results by checking the agreements of both teams/players</h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>5</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            &emsp;<h7><b>a</b>. Champion Team - highest overall points</h7><br>
            &emsp;<h7><b>b</b>. Solo Champion - highest overall in Blitz</h7><br>
            &emsp;<h7><b>c</b>. Best Captain - best captain according to all participants</h7><br>
            &emsp;<h7><b>d</b>. Most Valuable Player - best stats in the whole season</h7><br>
            &emsp;<h7><b>e</b>. Game Mode Awards - Each game mode rewards specific skills, visit them all to know more</h7><br>
            <br><br><br>
        </div>
    </div>
</div>