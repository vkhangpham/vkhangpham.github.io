---
title: archive
permalink: /archive/
description: all posts from a bonfire.
---
<div class="panel page-panel">
  {% assign post_count = site.posts | size %}
  <div class="section-heading">
    <h2>archive</h2>
    <span class="page-count">{{ post_count }} post{% if post_count != 1 %}s{% endif %}</span>
  </div>

  <div class="page-body">
    <div class="post-list">
      {% for post in site.posts %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
  </div>
</div>
