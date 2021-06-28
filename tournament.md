---
layout: default
permalink: /dgl
title: Defense Grid League
---

<div class="row">
    <div class="col s12 m12 l12 center-align bg-defense-grid">
        <img class="header-img responsive-img" id="logo" src="/assets/img/DGL2_Circle.png"/>
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
                <div class="card dgl2-card">
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
            <h6><b>1</b>. Elect Captains</h6><br>
            <h6><b>2</b>. Captains will build a team of 3-5 club members that should not exceed the recommended team elo</h6>
            &emsp;<h7><b>a</b>. Validate your team in <a href="{{site.url}}/dgl">Team Creator</a></h7><br>
            &emsp;<h7><b>b</b>. Once everything is successful, your team name will be updated in this page</h7><br><br>
            <h6><b>3</b>. Battle with another player or team in an assigned Game Mode</h6><br>
            <h6><b>4</b>. Both teams record the results of the battle and the winner shall submit the result on Discord</h6><br>
            <h6><b>5</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            &emsp;<h7><b>a</b>. Champion Team - highest overall points</h7><br>
            &emsp;<h7><b>b</b>. Best Captain - best captain according to all participants</h7><br>
            &emsp;<h7><b>c</b>. Most Valuable Player - best stats in the whole season</h7><br>
            &emsp;<h7><b>d</b>. Game Mode Award - best performing team on a specific game mode</h7><br>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider red-shadow full-width"></div>
            <br>
            <h4 class="center-align"><a href="https://forms.gle/Xhq8QwxLKYeH4ypS6">Register Here<i class="material-icons">north_east</i></a></h4>
        </div>
        <div class="col s12 m12 l12 center-align">
            <h6 class="logo-text"><a href="{{site.url}}/dgl1"><i class="material-icons tiny">north_west</i>Visit Previous Season</a></h6>
            <br><br><br>
        </div>
    </div>
</div>