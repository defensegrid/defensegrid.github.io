---
layout: winter
permalink: /winter-brawl
title: Winter Brawl
---

<div class="row">
    <div class="col s12 center-align wb-header-bg">
        <h2 class="wb-header-dark-text wb-text-deep-ice">WINTER BRAWL</h2>
    </div>
</div>
<div class="container"> 
    <div class="row">
        {% assign bgcolors = "3e6589, dbe9f0, 97b7db, 3e6589, 97b7db, dbe9f0, 7a9ec7" | split: ", " %}
        {% assign count = 0 %}
        {% for mode in site.data.winter-brawl.modes %}
        {% assign count = count | plus: 1 %}
        {% assign selection = count | modulo: 7 %}
        <div class="col s6 m4 l4" style="
    border-radius: 3px;">
            <div class="card wb-mode" style="background-color:#{{bgcolors[selection]}};">
                <a class="activator" href="{{site.url}}/events/winter-brawl/{{mode.url}}">
                <div class="card-image wb-image-wrapper">
                    <img class="responsive-img wb-image" src="/assets/img/maps/{{mode.map}}">
                    <span class="wb-card-title wb-text-1">{{mode.name}}</span>
                </div>
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
    <br><br><br>
</div>