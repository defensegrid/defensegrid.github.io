---
layout: default
permalink: /events
title: Events
---

<div class="container">
    <div class="row">
        <div class="col s12">
            <h3 class="logo-text">Events</h3>
        </div>
    </div>
    <div class="row">
        <form id="search_form" class="col s12">
            <div class="input-field col s12">
              <i class="material-icons prefix">search</i>
              <input id="search_event" type="text" class="validate">
              <label for="search_event">Search using a Brawler or an Event</label>
            </div>
        </form>
    </div>
    <div class="row" id="page_filler">
        <div class="col s12">
            <p class="flow-text">
                Events are a vital part of our clan.<br><br>
                If you want to get better, join our Seasonal Tournaments or Showdowns.<br><br>
                If you want to have fun, join our Saturday Showdowns and many more.<br><br>
                Go through our list of events and see if something fits you. If there aren't any, you can always chat us.<br>
            </p>
        </div>
    </div>
    <div class="row" id="page_search_none" hidden>
        <div class="col s12">
            <p class="flow-text">
                We found nothing related to your search.<br>
                Please check the spelling and try again.<br>
            </p>
        </div>
    </div>
    {% for event in site.data.brawl-events.brawl-events %}
        {% if event.name != "Template" and event.name != "template"%}
        {% if event.status == "published"%} 
    <div class="row" id="row-{{forloop.index}}" hidden>
        <div class="col s12">
            <div class="card-search" hidden>
                <div class="card-id">row-{{forloop.index}}</div>
                <div class="event-name">{{event.name}}</div>
                <div class="event-brawler">{{event.brawler}}</div>
            </div>
            <div class="card">
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{{event.name}}<i class="material-icons right">expand_less</i></span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{event.brawler}}<i class="material-icons right">expand_more</i></span>
                    <p>
                        {{event.gameplay}}
                    </p>
                    <span class="badge">{{event.map}}</span>
                </div>
                <div class="card-content waves-effect waves-block waves-light no-space-top">
                  <p class="activator">
                    {{event.description}}<br><br>
                    <span class="badge">{{event.gamemode}}</span>
                  </p>
                </div>
            </div>
        </div>
    </div>
        {%endif%}
        {%endif%}
    {% endfor %}
    <br><br>
</div>

<script type="text/javascript" src="/assets/js/similarity-search.js"></script>

<script>
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var options = {};
    var instances = M.ScrollSpy.init(elems, options);
    });

    var card_ids = $(".card-id").map(function() {return this.innerHTML;}).get();
    var event_names = $(".event-name").map(function() {return this.innerHTML;}).get();
    var event_brawler = $(".event-brawler").map(function() {return this.innerHTML;}).get();

    $( "#search_form" ).submit(function( event ) {
        var similarity_threshold = 0.60;
        var str = $("#search_event").val()
        event.preventDefault();

        $("#page_filler").hide();

        var names_similarity = [];
        var brawlers_similarity = [];
        var cards_to_show = [];

        for ( var i = 0, l = card_ids.length; i < l; i++ ) {
            $("#" + card_ids[i]).hide();
            var name_similarity = similarity(str, event_names[i]) + keyword_reward(str, event_names[i]);
            var brawler_similarity = similarity(str, event_brawler[i]) + keyword_reward(str, event_brawler[i]);

            names_similarity.push(name_similarity);
            brawlers_similarity.push(brawler_similarity);
        }

        var cards_shown = 0;

        for ( var i = 0, l = names_similarity.length; i < l; i++) {
            if(parseFloat(similarity_threshold) < parseFloat(names_similarity[i]) || parseFloat(similarity_threshold) < parseFloat(brawlers_similarity[i]))
            {
                $("#" + card_ids[i]).show();
                cards_shown++;
            }
        }

        if(cards_shown < 1)
        {
            $("#page_search_none").show();
        }
        else
        {
            $("#page_search_none").hide();
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });
</script>
