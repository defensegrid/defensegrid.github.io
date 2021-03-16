---
layout: default
permalink: /hall-of-fame
title: Hall of Fame
---
<div class="container text-center" style="position:absolute;bottom:10%;left:5%">
  <h1>Moved</h1>

  <p><a href="{{site.url}}/fame"><b>Click me to go to the new page</b></a></p>
</div>

<!-- Redirect to the new endpoint -->
<script>
$(location).attr('href', '{{site.url}}/fame')
</script>