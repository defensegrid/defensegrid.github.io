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
            <h6><b>2</b>. Form a Team and a Strategy</h6>  
            &emsp;<h7><b>a</b>. A Team is a set of brawlers that will be used in the chosen Game Mode and Map</h7><br>
            &emsp;<h7><b>b</b>. A Strategy is an idea that can be executed by a Team</h7><br><br>
            <h6><b>3</b>. Battle another Team and Strategy</h6>
            <h7><b>Friendly Battle</b></h7><br>
            &emsp;<h7><b>a</b>. The first Team and Strategy to reach 2 wins becomes a Candidate</h7><br>
            &emsp;<h7><b>b</b>. The Team and Strategy that did not reach 2 wins becomes the Losing Strategy</h7><br><br>
            <h7><b>PvP</b></h7><br>
            &emsp;<h7><b>a</b>. Results in this mode can only affect Unique Wins. More details below</h7><br><br>
            <h6><b>4</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <h6><b>5</b>. Hosts will verify the results</h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>Title Holder</b></h7><br>
            &emsp;<h7><b>a</b>. The current Title Holder is the Unrivaled Strategy of the Game Mode and Map</h7><br>
            &emsp;<h7><b>b</b>. The strategy with the most titles is the Truly Unrivaled Strategy</h7><br>
            &emsp;<h7><b>c</b>. Titles are awarded to the creators of the strategy and the players that executed it</h7><br><br>
            <h7><b>Candidate</b></h7><br>
            &emsp;<h7><b>a</b>. If there's no Title Holder, then the Candidate automatically becomes the Title Holder</h7><br>
            &emsp;<h7><b>b</b>. If the Losing Strategy is the current Title Holder, then the Candidate becomes the new Title Holder</h7><br>
            &emsp;<h7><b>c</b>. If a Candidate surpasses the current Title Holder's number of Unique Wins, then it becomes the new Title Holder</h7><br><br>
            <h7><b>Unique Wins</b></h7><br>
            &emsp;<h7><b>a</b>. A Unique Win is gained from a unique combination of a Team and a Strategy in a given Game Mode and Map</h7><br>
            &emsp;<h7><b>b</b>. Max Unique Wins is 10 wins; Reaching this means surpassing the current Title Holder of the Game Mode and Map</h7><br>
            &emsp;<h7><b>c</b>. The number of Unique Wins of a Strategy will be reduced by 1 for every loss</h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>