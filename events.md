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
                If it is to get better, we have the Seasonal Tournaments or Showdowns.<br><br>
                If it is to have fun, we have Saturday Showdowns and many more.<br><br>
                Go through the list of events and see if something fits you. If there aren't any, you can always chat us.<br>
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

<script>
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var options = {};
    var instances = M.ScrollSpy.init(elems, options);
    });


    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();

      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

    function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    var card_ids = $(".card-id").map(function() {return this.innerHTML;}).get();
    var event_names = $(".event-name").map(function() {return this.innerHTML;}).get();
    var event_brawler = $(".event-brawler").map(function() {return this.innerHTML;}).get();

    $( "#search_form" ).submit(function( event ) {
        var similarity_threshold = 0.60;
        var str = $("#search_event").val()
        event.preventDefault();

        var name_similarity = [];
        var brawler_similarity = [];
        var cards_to_show = [];

        for ( var i = 0, l = card_ids.length; i < l; i++ ) {
            $("#" + card_ids[i]).hide();
            name_similarity.push(similarity(str, event_names[i]));
            brawler_similarity.push(similarity(str, event_brawler[i]));
        }

        var cards_shown = 0;

        for ( var i = 0, l = name_similarity.length; i < l; i++) {
            if(parseFloat(similarity_threshold) < parseFloat(name_similarity[i]) || parseFloat(similarity_threshold) < parseFloat(brawler_similarity[i]))
            {
                $("#" + card_ids[i]).show();
                cards_shown++;
            }
        }

        console.log(cards_shown);

        $("#page_filler").hide();

        if(cards_shown < 1)
        {
            $("#page_filler").show();
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });
</script>
