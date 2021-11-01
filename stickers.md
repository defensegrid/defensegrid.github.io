---
layout: default
permalink: /stickers
title: Stickers
---
<div class="row">
  <div class="col s12 bg-dark-gray-upper center-align">
    <h3 class="logo-text">Stickers</h3>
  </div>
</div>
<div class="container">
  <div class="row center-align" id="page_filler">
      <div class="col s12">
          <p class="flow-text">
              Click to copy an Expression<br>
          </p>
      </div>
      <form id="search_form" class="col s12">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input id="search_event" type="text" class="autocomplete">
          <label for="search_event">Sticker Name</label>
        </div>
      </form>
  </div>
  <div class="row" id="page_search_none" hidden>
      <div class="col s12">
          <p class="flow-text">
              This sticker is not available.<br><br>
              If you want to improve our collection, send it in our <a href="{{site.url}}/#chat">chat<i class="material-icons tiny valign-top">north_east</i></a><br>
          </p>
      </div>
  </div>
  <div class="row">
  {% assign files = site.static_files %}
  {% for file in files %}
      {% if file.path contains 'assets/sticker'%}
       {% continue %} 
      {%endif%}
      {% if file.path contains 'sticker'%}
      <div class="col s12 m6 l4" id="stickers-{{forloop.index}}">
        <div class="card-search" hidden>
          <div class="sticker-id">stickers-{{forloop.index}}</div>
          <div class="sticker-name">{{file.path}}</div>
        </div>
        <div class="card center-align sticker" onclick="copyToClipboard('{{file.path}}')">
          <div class="card-content">
            <img class="responsive-img" src="{{site.url}}/assets{{file.path}}">
          </div>
        </div>
      </div>
      {%endif%}
  {% endfor %}
  </div>
  <br><br>
</div>
<script type="text/javascript" src="/assets/js/similarity-search.js"></script>

<script>
    const site_url = '{{site.url}}'
    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var options = {};
    var instances = M.ScrollSpy.init(elems, options);
    });

    function copyToClipboard(file) {
      const prefix = "Copied "
      M.toast({html: prefix + file.slice(9)})
      var promise = navigator.clipboard.writeText(site_url + file)
    }

    var sticker_ids = $(".sticker-id").map(function() {return this.innerHTML;}).get();
    var sticker_names = $(".sticker-name").map(function() {return this.innerHTML;}).get();
    console.log(sticker_ids)
    console.log(sticker_names)

    $( "#search_form" ).submit(function( event ) {
        var similarity_threshold = PASSABLE;
        var str = $("#search_event").val()

        if(str == ""){
          return
        }

        str = "sticker/" + str
        event.preventDefault();

        var names_similarity = [];

        var similarity_tracker = 0;
        for ( var i = 0, l = sticker_ids.length; i < l; i++ ) {
            $("#" + sticker_ids[i]).hide();
            
            similarity_score = similarity(str,sticker_names[i]);
            names_similarity.push(similarity_score);
        }

        var cards_shown = 0;

        for ( var i = 0, l = sticker_ids.length; i < l; i++) {
            if(parseFloat(similarity_threshold) < parseFloat(names_similarity[i]))
            {
                $("#" + sticker_ids[i]).show();
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
