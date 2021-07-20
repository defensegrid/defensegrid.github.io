---
layout: default
permalink: /synergy1
title: Synergy
---

<div class="row">
    <div class="col s12 center-align bg-dark-gray">
        <h4 class="logo-text">Synergy</h4>
        <h6 class="logo-sub-text">Vision & Execution</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.challenges.unrivaled.modes %}
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
            </div>
        </div>
        {% endfor %}
        <div class="col s12 m12 l12">
            <br>
            <h4>Mechanics</h4>
            <h6><b>1</b>. Choose a Game Mode</h6><br>
            <h6><b>2</b>. Form a Synergy</h6>  
            &emsp;<h7><b>a</b>. Build your Team Composition (Duo or Trio)</h7><br>
            &emsp;<h7><b>b</b>. Choose the Skills and Roles of each Brawler</h7><br>
            &emsp;<h7><b>c</b>. Practice your Plan</h7><br><br>
            <h6><b>3</b>. Challenge another Synergy</h6>
            <h7><i>In PvP or Friendly Battle</i></h7><br>
            &emsp;<h7><b>a</b>. Fight against any Synergies</h7><br>
            &emsp;<h7><b>b</b>. Record 5 Consecutive Matches with No Breaks</h7><br>
            &emsp;<h7><b>c</b>. <i>or</i> Record at least 10 Consecutive Matches with Short Breaks</h7><br><br>
            <h6><b>4</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <h6><b>5</b>. Hosts will verify and declare the Win Rate of the Synergy</h6>
            &emsp;<h7><b>a</b>. The formula that will be used is (Number of Wins)÷(Total Matches)</h7><br>
            &emsp;<h7><b>b</b>. Teams can improve the win rate by submitting another match record from Step 3</h7><br><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><i>Title Holder</i></h7><br>
            &emsp;<h7><b>a</b>. For a Game Mode, the Synergy with the Highest Win Rate is the 'Best Synergy in [Game Mode]'</h7><br>
            &emsp;<h7><b>b</b>. For Multiple Game Modes, the Synergy with the most number of Highest Win Rate is the 'Perfect Synergy'</h7><br>
            &emsp;<h7><b>c</b>. The Achievement is awarded to the creators and the players of the Synergy</h7><br>
            &emsp;<h7><b>d</b>. The Synergy can be named by the title holders and it will be shown in Hall of Fame instead of the default title</h7><br><br>
            <h7><i>Tie Breakers</i></h7><br>
            &emsp;<h7><b>a</b>. If the Win Rate difference of a New Synergy and the 'Best Synergy in [Game Mode]' is at most 2.5%, a Tie Breaker can be requested</h7><br>
            &emsp;<h7><b>b</b>. The Tie Breaking Match should be a Best of 5 Match between the said Synergies</h7><br>
            &emsp;<h7><b>c</b>. The Winning Synergy becomes the new 'Best Synergy in [Game Mode]' and can take the Win Rate of the Losing Synergy</h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>