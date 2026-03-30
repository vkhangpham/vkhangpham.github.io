# between bonfires

This repo is now a minimal Jekyll blog for GitHub Pages.

## Local setup

1. Run `./bin/setup`
2. Run `./bin/check`
3. Run `./bin/serve`
4. Open `http://127.0.0.1:4000`

## Publishing flow

1. Run `./bin/new-post` for an interactive template, or create a new Markdown file in `_posts/` manually.
2. Name it `YYYY-MM-DD-title.md`.
3. Add front matter like this:

```md
---
title: Your post title
tags: [writing, notes]
---
Opening paragraph here.

<!--more-->

Rest of the post here.
```

4. Commit and push to `main`.
5. GitHub Pages publishes it automatically.

## Good places to edit

- `_config.yml` for site title, description, and base settings
- `about.md` for your bio
- `index.md` for the home-page intro
- `assets/css/site.css` for the visual style

## Drafts

Add `published: false` to a post's front matter if you want to keep it in the repo without publishing it yet.

## Local preview

The repo now includes a reproducible Bundler setup and prefers Homebrew Ruby automatically, so local preview should just work through `./bin/setup`, `./bin/check`, and `./bin/serve`.
