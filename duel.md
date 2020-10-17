---
layout: default
permalink: /duel
title: Duel
---

<div class="container"> 
    <div class="center-align">
        <h4 class="logo-text">Duel</h4>
        <h6 class="logo-sub-text">Valor & Wit</h6>
        <br>
        <div class="divider full-width gray-shadow"></div>
    </div>
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.challenges.duel.modes %}
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
            <h6><b>1</b>. Challenge a Player</h6>  
            <h7><i>Both of you choose:</i></h7><br>
            &emsp;<h7><b>a</b>. 1 Map Each</h7><br>
            &emsp;<h7><b>b</b>. 1 Brawler Each</h7><br><br>
            <h6><b>2</b>. Duel</h6>
            <h7><i>Balanced Battle</i></h7><br>
            &emsp;<h7><b>a</b>. In your chosen map</h7><br>
            &emsp;<h7><b>b</b>. And in your opponent's chosen map</h7><br><br>
            <h7><i>Risked Battle</i></h7><br>
            &emsp;<h7><b>a</b>. In your chosen map</h7><br>
            &emsp;<h7><b>b</b>. Or in your opponent's chosen map</h7><br><br>
            <h6><b>3</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <h6><b>4</b>. Hosts will verify and declare the Win Rate each player for their chosen brawler</h6>
            &emsp;<h7><b>a</b>. The formula that will be used is (Number of Wins)÷(Total Matches)</h7><br>
            &emsp;<h7><b>b</b>. In a Balanced Battle, winning in both maps counts as 1 win, losing in both counts as 1 loss, else it doesn't count</h7><br>
            &emsp;<h7><b>c</b>. In a Risk Battle, if you win in your opponent's chosen map, you get 2 wins and your opponent gets 2 losses</h7><br>
            &emsp;<h7><b>d</b>. In a Risk Battle, if you win in your chosen map, you get 0 wins and your opponent gets 1 loss</h7><br><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>6</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>Title Holder</b></h7><br>
            &emsp;<h7><b>a</b>. The Player and Brawler with the Highest Win Rate is the 'Best [Brawler Name]'</h7><br>
            &emsp;<h7><b>b</b>. The Player with the most number of Highest Win Rate in Multiple Brawlers is the 'King of Duels'</h7><br>
            &emsp;<h7><b>c</b>. The Achievement is awarded to the Player</h7><br><br>
            <h7><b>Tie Breakers</b></h7><br>
            &emsp;<h7><b>a</b>. If two players are tied in win rates, a tie breaker should be done/h7><br>
            &emsp;<h7><b>b</b>. A tie breaker is done in a Risked Battle</h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>