---
layout: default
permalink: /winter-brawl
title: Winter Brawl
---

<div class="row">
    <div class="col s12 center-align bg-dark-gray">
        <h4 class="logo-text">Winter Brawl</h4>
        <h6 class="logo-sub-text">Icy Dicey Spicy</h6>
        <br>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12 center-align">
            <br>
            <h4 class="logo-text">Games</h4>
        </div>
        {% for mode in site.data.challenges.winter-brawl.modes %}
        <div class="col s12 m8 offset-m2 l6">
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