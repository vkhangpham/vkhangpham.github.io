# between bonfires

A minimal Jekyll blog for GitHub Pages.

- Site: <https://vkhangpham.github.io>
- Permalinks: `/:title/`
- Post excerpts: `<!--more-->`

## Local workflow

1. Run `./bin/setup` to install the project dependencies.
2. Run `./bin/check` to verify the site builds cleanly.
3. Run `./bin/serve` to start a local preview.

`./bin/serve` enables drafts and live reload for local writing and design work.

## Writing posts

Use `./bin/new-post` for an interactive post template, or create the file manually in `_posts/`.

- Filename format: `YYYY-MM-DD-title.md`
- Required front matter: `title`
- Helpful optional front matter: `tags`, `description`, `published: false`
- Post layout: applied automatically by `_config.yml`

Example:

```md
---
title: "Your post title"
tags: ["writing", "notes"]
description: "One-line summary for feeds or sharing."
---

Opening paragraph here.

<!--more-->

Rest of the post here.
```

Commit and push to `main` when you are ready to publish. GitHub Pages deploys the site automatically from there.

## Key files

- `_config.yml` for site title, description, permalink, and defaults
- `index.md` for the home-page intro
- `about.md` for the bio/about page
- `archive.md` for the archive page
- `_posts/*.md` for posts
- `_layouts/*.html` and `_includes/*.html` for shared structure
- `assets/css/site.css` for visual styling
