---
layout: dgl
permalink: /haven 
title: Haven 
---

<div class="row">
    <div class="col s12 center-align bg-defense-grid">
        <h4 class="logo-text">Haven</h4>
        <h6 class="logo-sub-text">A Delicate Balance</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12">
            <br>
            <h4>Game Modes</h4>
        </div>
        {% for mode in site.data.challenges.haven.modes %}
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
            <h7> <small>ⓘ All Modes for the week are updated every Sunday</small></h7><br>
            <h6><b>2</b>. Build a Haven with your team</h6>
            <h7><b>a</b>. Choose your Team's Map based on the <i>Round Game Mode</i></h7><br>
            <h7> <small>ⓘ Your team can use a Custom Map.</small></h7><br>
            <h7><b>b</b>. Choose the Skills and Roles of each Brawler</h7><br>
            <h7><b>c</b>. Practice your Plan</h7><br>
            <h7> <small>ⓘ Rotation: For teams with more than 3 players, 1 player from the trio in the previous 3v3 Game Mode has to sub out. Players can't sub in alternatingly</small></h7><br><br>
            <h6><b>3</b>. Match-up with another Team</h6>
            <h7><i>Defenders</i></h7><br>
            <h7><b>a</b>. The team that uses their chosen Map in Step #2 are the Defenders</h7><br>
            <h7><b>b</b>. Choose 1 brawler or 2 gadgets that cannot be used by the Attackers</h7><br>
            <h7> <small>ⓘ At least 1 Wall Destroying Gadget is immune from ban</small></h7><br>
            <h7><b>c</b>. Protect your base(s); Stall the Attackers</h7><br><br>
            <h7><i>Attackers</i></h7><br>
            <h7><b>a</b>. Destroy or capture the base(s) of the Defenders</h7><br>
            <h7><b>b</b>. Choose 2 star powers that cannot be used by the Defenders</h7><br>
            <h7><b>c</b>. When time runs out or the game ends, the teams switch sides</h7><br><br>
            <h7><i>Overtime</i></h7><br>
            <h7><b>a</b>. Defenders can now destroy or capture the base(s) of the Attackers</h7><br>
            <h7><b>b</b>. <i>Heist:</i> Match ended and both safes are not destroyed</h7><br>
            <h7><b>c</b>. <i>Hotzone:</i> Match ended and not all zones are captured</h7><br><br>
            <h7><i>Restrictions</i></h7><br>
            <h7><b>a</b>. If the Defenders are spawned on the wrong side, the match does not count and should be restarted</h7><br>
            <h7><b>b</b>. Attackers and Defenders switch after 1 battle</h7><br>
            <h7><b>c</b>. There will only be 2 battles</h7><br>
            <h7><b>d</b>. Defenders cannot destroy the safe of the Attackers before Overtime</h7><br>
            <h7><b>e</b>. Defenders cannot (capture all) the zones of the Attackers before Overtime</h7><br><br>
            <h6><b>4</b>. Submit the results on <a href="{{site.url}}/#chat">Discord<i class="material-icons tiny">north_east</i></a></h6><br>
            <a href="{{site.url}}/hall-of-fame"><h6><b>5</b>. Hall of Fame<i class="material-icons tiny">north_east</i></h6></a>
            <h7><b>a</b>. The team with the overall longest defending time gets the title <b>Living Fortress</b></h7><br>
            <h7><b>b</b>. The team with the overall shortest attacking time gets the title <b>Conqueror</b></h7><br><br>
        </div>
    </div>
    <br><br><br>
</div>