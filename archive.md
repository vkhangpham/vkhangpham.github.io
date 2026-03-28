---
title: Archive
permalink: /archive/
description: All posts from Khang Pham.
---
<div class="panel">
  <div class="section-heading">
    <h2>Archive</h2>
    <span class="meta">{{ site.posts | size }} posts</span>
  </div>

  <div class="post-list">
    {% for post in site.posts %}
      <article class="post-card">
        <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.tags and post.tags.size > 0 %}
          <p class="tags">{{ post.tags | join: " · " }}</p>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</div>
