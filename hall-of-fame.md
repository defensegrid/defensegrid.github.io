---
layout: default
permalink: /hall-of-fame
title: Hall of Fame
---

<div class="container">
  <div class="row">
    <div class="col s12">
      <h3 class="logo-text">Hall of Fame</h3>
    </div>
  </div>
  <div class="row">
    <form id="search_form" class="col s12">
      <div class="input-field col s12">
        <i class="material-icons prefix">search</i>
        <input id="search_event" type="text" class="validate">
        <label for="search_event">Search your Name</label>
      </div>
    </form>
  </div>
  <div class="row" id="page_filler">
      <div class="col s12">
          <p class="flow-text">
              Epic Moments of Remarkable Players and Teams from our Clan<br>
          </p>
      </div>
  </div>
  <div class="row" id="page_search_none" hidden>
      <div class="col s12">
          <p class="flow-text">
              It seems that your name is still not on the list.<br><br>
              You can learn more from us and make a name for yourself!<br><br>
              If you have an entry, send it in our chat ASAP!<br>
          </p>
      </div>
  </div>
  <div class="row" id="search_key_container" hidden>
      <div class="col s12">
          <h4 class="logo-text" id="search_key_content"></h4>
      </div>
  </div>
  <div class="row">
  {% for achievement in site.data.brawl-of-fame.brawl-of-fame %}
      {% if achievement.name != "Template" and achievement.name != "template"%}
      {% if achievement.status == "published"%}
      <div class="col s12 m6 l4" id="brawl-{{forloop.index}}">
        <div class="card-search" hidden>
          <div class="card-id">brawl-{{forloop.index}}</div>
          <div class="players">{{achievement.players | join: ";"}}</div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="card-title flow-text">{{achievement.name}}</span>
            <p>{{achievement.mechanics}}</p>
          </div>
        </div>
      </div>
      {%endif%}
      {%endif%}
  {% endfor %}
  {% for achievement in site.data.royale-of-fame.royale-of-fame %}
      {% if achievement.name != "Template" and achievement.name != "template"%}
      {% if achievement.status == "published"%}
      <div class="col s12 m6 l4" id="royale-{{forloop.index}}">
        <div class="card-search" hidden>
          <div class="card-id">royale-{{forloop.index}}</div>
          <div class="players">{{achievement.players | join: ";"}}</div>
        </div>
        <div class="card">
          <div class="card-content">
            <span class="card-title flow-text">{{achievement.name}}</span>
            <p>{{achievement.mechanics}}</p>
          </div>
        </div>
      </div>
      {%endif%}
      {%endif%}
  {% endfor %}
  </div>
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
    var players = $(".players").map(function() {return this.innerHTML;}).get();
    
    console.log(card_ids);
    console.log(players);

    $( "#search_form" ).submit(function( event ) {
        var similarity_threshold = VERY_ACCURATE;
        var str = $("#search_event").val()
        event.preventDefault();

        $("#page_filler").hide();

        var player_similarity = [];

        for ( var i = 0, l = card_ids.length; i < l; i++ ) {
            $("#" + card_ids[i]).hide();
            var similarity_tracker = 0;
            var player_list = players[i].split(";");
            
            for( var j = 0; j < player_list.length; j++) {
                similarty_score = similarity(str,player_list[j]);
                if(similarity_tracker < similarty_score)
                {
                  similarity_tracker = similarty_score;
                }
            }

            player_similarity.push(similarity_tracker);
        }

        var cards_shown = 0;

        for ( var i = 0, l = card_ids.length; i < l; i++) {
            if(parseFloat(similarity_threshold) < parseFloat(player_similarity[i]))
            {
                $("#" + card_ids[i]).show();
                cards_shown++;
            }
        }

        if(cards_shown < 1)
        {
            $("#page_search_none").show();
            $("#search_key_container").hide();
        }
        else
        {
            $("#page_search_none").hide();
            $("#search_key_container").show();
            $("#search_key_content").text(str);
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });
</script>
