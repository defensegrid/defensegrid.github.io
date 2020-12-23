---
layout: default
title: Last Sanctuary
url: last-sanctuary
---

{% for mode in site.data.challenges.winter-brawl.modes %}
{% if mode.name == "Last Sanctuary"%}
<div class="{{mode.background}}">
    <div class="row">
        <div class="col s12 center-align bg-dark-gray">
            <h4 class="logo-text">Last Sanctuary</h4>
            <br>
        </div>
    </div>
    <div class="row {{mode.background}} padding-bottom-small center-align">
        <div class="col s12 m5 offset-m1 l4 offset-l2">
            <img class="responsive-img small-img" src="/assets/img/maps/{{mode.map}}">
        </div>
        <div class="col s12 m5 l4 left-align">
            <p class="flow-text">{{mode.description}}</p>
        </div>
    </div>
</div>
<div class="container"> 
    <div class="row">
        <div class="col s12 m12 l12">
            <div class="col s12 m8 offset-m2 l10 offset-l1 center-align">
                <h4 class="logo-text">Brawlers</h4><br>
                {% for restriction in mode.restrictions %}
                <div class="col s4 m3 l2">
                    <img class="responsive-img" style="max-width:70px" src="/assets/img/restrictions/{{restriction}}.png" alt="{{restriction}}">
                </div>
                {% endfor %}
            </div>
        </div>
        <div class="col s12 m8 offset-m2 l10 offset-l1">   
            <br> 
            <div class="divider thin-gray-shadow full-width"></div>
            <br>
            <h4 class="center-align logo-text">Mechanics</h4><br>
            {% assign letters = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z" | split: ", " %}
            {% assign step_count = 0 %}
            {% for mechanics in mode.mechanics %}
                {% assign step_count = step_count | plus: 1 %}
                <h6><b>{{step_count}}</b>. {{mechanics.step}}</h6>
                {% assign substep_count = 0 %}
                {% for substep in mechanics.substeps %}
                &ensp;&ensp;<h7><b>{{letters[substep_count]}}</b>. {{substep}}</h7><br>
                {% assign substep_count = substep_count | plus: 1 %}
                {% endfor %}
                <br>
            {% endfor %}
        </div>
    </div>
    <br><br><br>
</div>
{%endif%}
{% endfor %}