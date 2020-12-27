---
layout: winter
permalink: /winter-brawl
title: Winter Brawl
---

<div class="row">
    <div class="col s12 center-align bg-light-ice">
        <h4 class="logo-text">Winter Brawl</h4>
        <h6 class="logo-sub-text">Icy Dicey Spicy</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12 center-align">
            <script type="text/javascript" src="/assets/js/timer.js"></script>
            <div id="clockdiv">
              <div>
                <span class="days"></span>
              </div>
              <div>
                <span class="hours"></span>
              </div>
              <div>
                <span class="minutes"></span>
              </div>
              <div class="">
                <span class="seconds"></span>
              </div>
            </div>
            <script>
                var deadline = new Date("2020-12-29T13:00:00.000+00:00");
                initializeClock('clockdiv', deadline);
            </script>
        </div>
        <div class="col s12 m12 l12 center-align">
            <br>
            <div class="divider thin-winter-shadow full-width"></div>
            <h4 class="dark-winter-text logo-text">Games</h4>
        </div>
        {% for mode in site.data.challenges.winter-brawl.modes %}
        <div class="col s12 m8 offset-m2 l6 bg-light-ice" style="
    border-radius: 3px;">
            <div class="card" style="background-color:#{{mode.color}};">
                <a class="activator" href="{{site.url}}/{{mode.url}}">
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
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
    <br><br><br>
</div>