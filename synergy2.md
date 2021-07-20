---
layout: dgl
permalink: /synergy
title: Synergy
---

<div class="row">
    <div class="col s12 center-align bg-defense-grid">
        <h4 class="logo-text">Synergy</h4>
        <h6 class="logo-sub-text">Unrivaled Affinity</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.challenges.synergy.modes %}
        <div class="col s12 m8 offset-m2 l6">
            <div class="card" style="background-color:#{{mode.color}};">
              <div class="card-content header-slim row valign-wrapper">
                <div class="col s2" style="margin-left: 10px;">
                  <img class="responsive-img logo-img" src="/assets/img/modes/{{mode.resource}}.png"> <!-- notice the "circle" class -->
                </div>
                <div class="col s10">
                  <h5 class="brawl-text white-text" style="margin-top: 0.456rem">
                    {{mode.name}}
                  </h5>
                </div>
              </div>
              <div class="card-image">
                <img src="/assets/img/modes/{{mode.background}}.png">
              </div>
            </div>
        </div>
        {% endfor %}
        <div class="col s12 m12 l12">
            <br>
            <h4>Mechanics</h4>
            <h6><b>1</b>. Website / Host</h6>
            <h7><b>a</b>. Choose the <i>Round Game Mode</i></h7><br>
            <h7> <small>ⓘ Modes are updated every Sunday</small></h7><br>
            <h7><b>b</b>. Choose the <i>Round Map</i></h7><br><br>
            <h6><b>2</b>. Form a Synergy with your team</h6>
            <h7><b>a</b>. Choose your Team's Map based on the <i>Round Game Mode</i></h7><br>
            <h7> <small>ⓘ Your team can use a symmetrical Custom Map.</small></h7><br>
            <h7><b>b</b>. Choose the Skills and Roles of each Brawler</h7><br>
            <h7><b>c</b>. Practice your Plan, beware of Bans</h7><br>
            <h7> <small>ⓘ Rotation: For teams with more than 3 players, 1 player from the trio in the previous 3v3 Game Mode has to sub out. Players can't sub in alternatingly</small></h7><br><br>
            <h6><b>3</b>. Match-up with another Team</h6>
            <h7><i>1st and 2nd Battle</i></h7><br>
            <h7><b>a</b>. One team uses their chosen Map in Step #2 once</h7><br>
            <h7><b>b</b>. The other team bans either 1 brawler or 2 star powers</h7><br>
            <h7><b>c</b>. Both teams alternatingly pick 1 brawler, starting with the team that chose the map</h7><br>
            <h7><b>d</b>. In the next battle, teams switch roles</h7><br><br>
            <h7><i>Final Battle</i></h7><br>
            <h7><b>a</b>. Both Teams Fight in the <i>Round Map</i></h7><br>
            <h7><b>b</b>. Both Teams Ban 1 brawler</h7><br>
            <h7><b>c</b>. Both Teams alternatingly pick 1 brawler, starting with the team with the least wins in this match-up</h7><br><br>
            <h7><i>Overtime</i></h7><br>
            <h7><b>a</b>. <i>Gem Grab:</i> Total Collected Gems exceeded 20</h7><br>
            <h7><b>b</b>. <i>Brawl Ball:</i> Overtime Timer Triggered</h7><br>
            <h7><b>c</b>. <i>Bounty:</i> Match ended with both teams tied</h7><br>
            <h7><b>d</b>. <i>Siege:</i> Match ended with both towers not broken</h7><br><br>
            <h6><b>4</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>5</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>a</b>. The team with the highest points gets the title <b>Dream Team</b></h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>