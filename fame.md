---
layout: default
permalink: /fame
title: Hall of Fame
---

<div class="row">
  <div class="col s12 bg-dark-gray-upper center-align">
    <h3 class="logo-text">Hall of Fame</h3>
  </div>
</div>
<div class="container">
  <div class="row center-align" id="page_filler">
      <div class="col s12">
          <p class="flow-text">
              Epic Moments of Players and Teams from our Clan<br>
          </p>
      </div>
      <form id="search_form" class="col s12">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input id="search_event" type="text" class="validate">
          <label for="search_event">Player Name</label>
        </div>
      </form>
  </div>
  <div class="row" id="page_search_none" hidden>
      <div class="col s12">
          <p class="flow-text">
              It seems that your name is still not on the list.<br><br>
              You can learn more from us and make a name for yourself!<br><br>
              If you have an entry, send it in our <a href="{{site.url}}/#chat">chat<i class="material-icons tiny valign-top">north_east</i></a> ASAP!<br>
          </p>
      </div>
  </div>
  <div class="row" id="search_key_container" hidden>
      <div class="col s12">
          <h4 class="logo-text center-align" id="search_key_content"></h4>
      </div>
  </div>
  <div class="row">
  {% assign achievements = site.data.brawl-of-fame.brawl-of-fame | concat: site.data.royale-of-fame.royale-of-fame | sort: "difficulty" %}
  {% for achievement in achievements %}
      {% if achievement.name != "Template" and achievement.name != "template"%}
      {% if achievement.status == "published"%}
      <div class="col s12 m6 l4" id="achievement-{{forloop.index}}">
        <div class="card-search" hidden>
          <div class="card-id">achievement-{{forloop.index}}</div>
          <div class="players">{{achievement.players | join: ";"}}</div>
        </div>
        <a class="modal-trigger" href="#show-achievement-{{forloop.index}}">
        {% if achievement.difficulty <= 2 %}
        <div class="card center-align yellow-shadow">
        {% elsif  achievement.difficulty <= 5 %}
        <div class="card center-align red-shadow">
        {% elsif  achievement.difficulty <= 10 %}
        <div class="card center-align purple-shadow">
        {% elsif  achievement.difficulty > 10 %}
        <div class="card center-align">
        {% endif %}
          <div class="card-content">
            <h5 class="logo-sub-text">{{achievement.name}}</h5>
          </div>
        </div>
        </a>
        <div id="show-achievement-{{forloop.index}}" class="modal center-modal" style="max-width: 1000px;">
          <div class="modal-content center-align bg-dark-gray">
            <h5 class="logo-text">{{achievement.name}}</h5>
            <span class="logo-sub-text">{{achievement.mechanics}}</span><br><br>
            {% if achievement.players.size == 1 %}
            {% for player in achievement.players %}
                <h6 class="logo-text">{{player}}</h6>
            {% endfor %}
            {% endif %}
            {% if achievement.players.size == 2 %}
            <div class="row">
            {% for player in achievement.players %}
              <div class="col s12 m6 l6">
                <div class="card center-align" style="background:none;box-shadow:none">
                  <h6 class="logo-text">{{player}}</h6>
                </div>
              </div>
            {% endfor %}
            </div>
            {% endif %}
            {% if achievement.players.size > 2 %}
            <div class="row">
            {% for player in achievement.players %}
              <div class="col s12 m4 l4">
                <div class="card center-align" style="background:none;box-shadow:none">
                  <h6 class="logo-text">{{player}}</h6>
                </div>
              </div>
            {% endfor %}
            </div>
            {% endif %}
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
        var similarity_threshold = ACCURATE;
        var str = $("#search_event").val()
        event.preventDefault();

        $("#page_filler").hide();

        var player_similarity = [];
        var player = "";

        for ( var i = 0, l = card_ids.length; i < l; i++ ) {
            $("#" + card_ids[i]).hide();
            var similarity_tracker = 0;
            var player_list = players[i].split(";");
            
            for( var j = 0; j < player_list.length; j++) {
                similarity_score = similarity(str,player_list[j]);
                if(similarity_tracker < similarity_score)
                {
                  similarity_tracker = similarity_score;
                  if(parseFloat(similarity_threshold) < similarity_score)
                  {
                      player = player_list[j]
                  }
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
            $("#search_form").hide();

            if(str == "")
            {
              $("#search_key_content").text("To Be Achieved");
            }
            else
            {
              $("#search_key_content").text(player);
            }
        }

        $("#search_event").val('');
        $("#search_event").blur();
    });

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var options = {
      dismissible: true, // Allow modal to be dismissed by keyboard or overlay click
      opacity: 0.93, // Opacity of modal background
      inDuration: 1300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top offset
      endingTop: '10%', // Ending top offset
      //ready: someFunction
      };
      var instances = M.Modal.init(elems, options);
    });
</script>
