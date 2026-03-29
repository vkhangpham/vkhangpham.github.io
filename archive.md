---
title: archive
permalink: /archive/
description: all posts from a bonfire.
post_filters: true
---
<div class="panel page-panel">
  {% assign post_count = site.posts | size %}
  <div class="section-heading">
    <h2>archive</h2>
    <span class="page-count">{{ post_count }} post{% if post_count != 1 %}s{% endif %}</span>
  </div>

  <div class="page-body">
    <form class="post-filters" data-post-filters data-target="archive-post-list">
      <div class="post-filter-toolbar">
        <label class="post-search" for="archive-query">
          <svg class="utility-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
          <input id="archive-query" class="post-filter-input" type="search" name="query" placeholder="search titles" aria-label="Search posts by title">
        </label>

        <div class="post-date-filters" role="group" aria-label="Filter posts by date">
          <label class="post-date-input" for="archive-from">
            <svg class="utility-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 3v4"></path>
              <path d="M16 3v4"></path>
              <path d="M4 11h16"></path>
            </svg>
            <span class="post-date-label">from</span>
            <input id="archive-from" class="post-filter-input" type="date" name="from" aria-label="Show posts from date">
          </label>
          <label class="post-date-input" for="archive-to">
            <svg class="utility-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 3v4"></path>
              <path d="M16 3v4"></path>
              <path d="M4 11h16"></path>
            </svg>
            <span class="post-date-label">to</span>
            <input id="archive-to" class="post-filter-input" type="date" name="to" aria-label="Show posts until date">
          </label>
        </div>

        <button class="post-filter-reset" type="reset" aria-label="Reset filters" title="Reset filters">
          <svg class="utility-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
          </svg>
        </button>
      </div>

      {% if site.tags.size > 0 %}
        <div class="post-tag-row">
          <span class="post-tag-prefix">tags:</span>
          <fieldset class="post-tag-filters">
            <legend class="visually-hidden">Filter posts by tags</legend>
            {% assign sorted_tags = site.tags | sort %}
            {% for tag_group in sorted_tags %}
              {% assign tag_name = tag_group[0] %}
              <label class="post-tag-toggle">
                <input class="post-tag-checkbox" type="checkbox" name="tag" value="{{ tag_name | downcase }}">
                <span>{{ tag_name | downcase }}</span>
              </label>
            {% endfor %}
          </fieldset>
        </div>
      {% endif %}
    </form>

    <p class="post-filter-summary" data-filter-summary aria-live="polite">{{ post_count }} shown</p>

    <div class="post-list" id="archive-post-list">
      {% for post in site.posts %}
        {% include post-card.html post=post show_excerpt=true %}
      {% endfor %}
    </div>

    <p class="post-list-empty" data-post-empty hidden>No posts match that combination yet.</p>
  </div>
</div>
