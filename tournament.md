---
layout: default
permalink: /dgl
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
            <h6><b>2</b>. Battle with another player or team in an assigned Game Mode</h6><br>
            <h6><b>3</b>. Both teams record the results of the battle and the winner shall submit the result on <u><a href="{{site.url}}/#chat">Discord</a></u></h6><br>
            <h6><b>4</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>5</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            &emsp;<h7><b>a</b>. Champion Team - highest overall points</h7><br>
            &emsp;<h7><b>b</b>. Best Captain - best captain according to all participants</h7><br>
            &emsp;<h7><b>c</b>. Most Valuable Player - best stats in the whole season</h7><br>
            &emsp;<h7><b>d</b>. Game Mode Awards - Each game mode rewards specific skills, visit them all to know more</h7><br>
            <br><br><br>
        </div>
    </div>
</div>