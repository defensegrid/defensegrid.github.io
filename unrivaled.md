---
layout: default
permalink: /unrivaled
title: Unrivaled Strategy
---

<div class="container"> 
    <div class="center-align">
        <h4 class="logo-text">Unrivaled Strategy</h4>
        <h6 class="logo-sub-text">Vision & Execution</h6>
        <br>
        <div class="divider full-width gray-shadow"></div>
    </div>
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
            <h6><b>1</b>. Choose a Game Mode and a Map</h6><br>
            <h6><b>2</b>. Form a Strategy</h6>  
            &emsp;<h7><b>a</b>. Build your Team Composition</h7><br>
            &emsp;<h7><b>b</b>. Choose the Skills and Roles of each Brawler</h7><br>
            &emsp;<h7><b>c</b>. Practice your Plan</h7><br><br>
            <h6><b>3</b>. Test your Strategy</h6>
            <h7><b>In PvP or Friendly Battle</b></h7><br>
            &emsp;<h7><b>a</b>. Fight against any Strategy</h7><br>
            &emsp;<h7><b>b</b>. Record 5-10 consecutive matches of your Strategy</h7><br><br>
            <h6><b>4</b>. Submit the best result on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <h6><b>5</b>. Hosts will verify and declare the Win Rate of the Strategy or the New Unrivaled Strategy</h6>
            &emsp;<h7><b>a</b>. The formula that will be used is (Number of Wins)÷(Total Matches)</h7><br>
            &emsp;<h7><b>b</b>. Teams can improve the win rate by submitting another match record from Step 3</h7><br><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>Title Holder</b></h7><br>
            &emsp;<h7><b>a</b>. For 1 Game Mode and Map, the Strategy with the Highest Win Rate is the Unrivaled Strategy</h7><br>
            &emsp;<h7><b>b</b>. For Multiple Game Modes and Maps, the Strategy with the most number of Highest Win Rates is the Truly Unrivaled Strategy</h7><br>
            &emsp;<h7><b>c</b>. The Achievement is awarded to the creators of the strategy and the players that executed the Strategy</h7><br><br>
            <h7><b>Tie Breakers</b></h7><br>
            &emsp;<h7><b>a</b>. If the Win Rate difference of a New Strategy and the Current Unrivaled Strategy is only 2.5%, a Tie Breaker can be requested</h7><br>
            &emsp;<h7><b>b</b>. The Tie Breaking Match should be a Best of 5 Match between the said Strategies</h7><br>
            &emsp;<h7><b>c</b>. The Winning Strategy becomes the Unrivaled Strategy and takes the Win Rate of the Losing Strategy</h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>