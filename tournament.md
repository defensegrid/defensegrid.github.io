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
            <h5>Teams</h5>
        </div>
        {% for team in site.data.tournament.teams %}
            <div class="col s6 m3 l2" id="col1-{{forloop.index}}">
                <div class="card red-shadow">
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
            <h5>Mechanics</h5>
            <h6><b>1</b>. Elect Captains</h6><br>
            <h6><b>2</b>. Captains will build a 4-man team that should not exceed the recommended grouped elo</h6><br>
            <h6><b>3</b>. For each battle, Teams will be randomly assigned against another team</h6><br>
            <h6><b>4</b>. Game Modes are also randomly chosen for every battle and will have a pool of meta brawlers</h6>
            &emsp;<h7><b>a</b>. <i>Draft</i> &ndash; Both teams choose 2-3 meta brawlers from the pool. The 3rd brawler can be any brawler.</h7><br>
            &emsp;<h7><b>b</b>. <i>Mirror</i> &ndash; Both teams agree to pick the same set of brawlers from the pool</h7><br><br>
            <h6><b>5</b>. Both teams record the results of the battle and the winner shall submit the result on Discord</h6><br>
            <h6><b>6</b>. Hosts will verify the results by checking the brawlers used and the agreements of both teams</h6><br>
        </div>
        <div class="col s12 m12 l12">
            <br>
            <div class="divider"></div>
            <h5>Game Modes</h5>
        </div>
        {% for mode in site.data.tournament.modes %}
            <div class="col s6 m3 l2" id="col2-{{forloop.index}}">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4 logo-text center-align">{{mode}}</span>
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>
    <br><br>
</div>