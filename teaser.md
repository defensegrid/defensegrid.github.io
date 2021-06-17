---
layout: default
permalink: /new
title: NEW
---

<div class="container center-align">
    <div class="row center-align" style="margin-bottom: 5px;">
        <h3 class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2 " style="margin-bottom: 5px;">N</h3>
        <h3 class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2 " style="margin-bottom: 5px;">E</h3>
        <h3 class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2 " style="margin-bottom: 5px;">W</h3>
    </div>
    <div class="row center-align">
        <form id="search_form">
            <div class="input-field col push-s3 s2 push-m3 m2 push-l3 l2">
              <input id="char-1" class="logo-text center-align" type="text" maxLength="1" style="font-size: 2.92rem;text-transform: uppercase;">
            </div>
            <div class="input-field col push-s3 s2 push-m3 m2 push-l3 l2">
              <input id="char-2" class="logo-text center-align" type="text" maxLength="1" style="font-size: 2.92rem;text-transform: uppercase;">
            </div>
            <div class="input-field col push-s3 s2 push-m3 m2 push-l3 l2">
              <input id="char-3" class="logo-text center-align" type="text" maxLength="1" style="font-size: 2.92rem;text-transform: uppercase;">
            </div>
        </form>
    </div>
    <div class="row center-align" id="hide-1" hidden>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            E<br>d<br>e<br>s<br>i<br>u<br>n<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            E<br>d<br>e<br>u<br>i<br>s<br>g<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            E<br>d<br>e<br>s<br>i<br>u<br>n<br>
        </p>
    </div>
    <div class="row center-align" id="hide-2" hidden>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>R<br>g<br>e<br>g<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>R<br>n<br>e<br>g<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>R<br>g<br>e<br>g<br>
        </p>
    </div>
    <div class="row center-align" id="hide-3" hidden>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>A<br>f<br>e<br>e<br>l<br>d<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>A<br>f<br>e<br>e<br>l<br>d<br>
        </p>
        <p class="logo-text col push-s3 s2 push-m3 m2 push-l3 l2">
            <br>A<br>e<br>f<br>l<br>e<br>d<br>
        </p>
    </div>
    <br><br><br>
</div>

<script>
    $('#char-1').focus();

    $('#char-1').on('input', function(){
        if(this.value == "E"){
            $("#hide-1").show();
            $("#char-2").focus();
        }
        else {
            this.value = ""
        }
    });

    $('#char-2').on('input', function(){
        if(this.value == "R"){
            $("#hide-2").show();
            $("#char-3").focus();
        }
        else {
            this.value = ""
        }
    });

    $('#char-3').on('input', function(){
        if(this.value == "A"){
            $("#hide-3").show();
            $("#char-3").blur();
        }
        else {
            this.value = ""
        }
    });

</script>