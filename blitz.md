---
layout: dgl
permalink: /blitz
title: Blitz 
---

<div class="row">
    <div class="col s12 center-align bg-defense-grid">
        <h4 class="logo-text">Blitz</h4>
        <h6 class="logo-sub-text">A Fragile Trust</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.challenges.blitz.modes %}
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
            <h7><b>a</b>. Choose the team or player that will prepare the Blitz</h7><br>
            <h7><b>b</b>. Group all players or teams by 6 or 8 or 10</h7><br>
            <h7> <small>ⓘ Announcement will happen before the event</small></h7><br><br>
            <h6><b>2</b>. Prepare for a Blitz</h6>
            <h7><i>The chosen team or player in Step #1</i></h7><br>
            <h7><b>a</b>. Chooses a map</h7><br>
            <h7> <small>ⓘ You can choose a Custom Map</small></h7><br>
            <h7><b>b</b>. Bans 1 Brawler or 2 Star Powers</h7><br>
            <h7><b>c</b>. Can also choose 1 modifier to be used in the map</h7><br><br>
            <h7><i>Other teams</i></h7><br>
            <h7><b>a</b>. Choose 1 representative to participate in the Blitz</h7><br>
            <h7> <small>ⓘ Rotation: The same representative can play again after 2 other players have played</small></h7><br><br>
            <h6><b>3</b>. Battle other Players</h6>
            <h7><i>The Calm</i></h7><br>
            <h7><b>a</b>. Players power-up, take key positions, or scout</h7><br>
            <h7><b>b</b>. 0 or 1 bot roams around the map</h7><br>
            <h7><b>c</b>. Players can choose to eliminate or save the bots</h7><br><br>
            <h7><i>Blitz</i></h7><br>
            <h7><b>a</b>. All bots got eliminated</h7><br>
            <h7><b>b</b>. A player was killed</h7><br>
            <h7><b>c</b>. When 1 event above happens, the blitz begins</h7><br>
            <h7><b>d</b>. Eliminate other players and Survive</h7><br><br>
            <h7><i>Restrictions</i></h7><br>
            <h7><b>a</b>. Players cannot attack or damage each other during <i>The Calm</i></h7><br>
            <h7><b>b</b>. Players caught teaming will get reduced points</h7><br>
            <h7><b>c</b>. Players cannot use Bot names</h7><br><br>
            <h6><b>4</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>5</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>a</b>. The player with the most points gets the title <b>True Mettle</b></h7><br>
            <h7><b>b</b>. The player with the most first bloods gets the title <b>Peacebreaker</b></h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>