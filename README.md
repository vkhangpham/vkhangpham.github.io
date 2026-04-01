# between bonfires

A minimal Jekyll blog for GitHub Pages.

- Site: <https://vkhangpham.github.io>
- Permalinks: `/:title/`
- Post excerpts: `<!--more-->`
- SEO: `jekyll-seo-tag`, `jekyll-sitemap`, `robots.txt`

## Local workflow

1. Run `./bin/setup` to install the project dependencies.
2. Run `./bin/check` to verify the site builds cleanly.
3. Run `./bin/serve` to start a local preview.

`./bin/serve` enables drafts and live reload for local writing and design work.

## Writing posts

Use `./bin/new-post` for an interactive post template, or create the file manually in `_posts/`.

- Filename format: `YYYY-MM-DD-title.md`
- Required front matter: `title`
- Helpful optional front matter: `tags`, `description`, `published: false`, `math: true`
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

## Technical posts with math

Set `math: true` in the front matter for any post or page that should render LaTeX with MathJax.

Example:

```md
---
title: "A technical note"
math: true
---

Inline math like $E = mc^2$ works in prose.

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$
```

Commit and push to `main` when you are ready to publish. GitHub Pages deploys the site automatically from there.

## SEO notes

- Shared metadata and JSON-LD come from `jekyll-seo-tag` in `_layouts/default.html`
- `robots.txt` and `sitemap.xml` help search engines discover the full site
- Post `description` front matter should be specific, since it is reused in search and social snippets
- Repo-only docs and tooling paths such as `README.md`, `AGENTS.md`, `bin/`, and `history/` are excluded from the published site

## Key files

- `_config.yml` for site title, description, permalink, and defaults
- `index.md` for the home-page intro
- `about.md` for the bio/about page
- `archive.md` for the archive page
- `_posts/*.md` for posts
- `_layouts/*.html` and `_includes/*.html` for shared structure
- `assets/css/site.css` for visual styling
