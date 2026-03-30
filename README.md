# between bonfires

A minimal Jekyll blog for GitHub Pages.

- Site: <https://vkhangpham.github.io>
- Permalinks: `/:title/`
- Post excerpts: `<!--more-->`

## Local workflow

1. Run `./bin/setup` to install gems into `vendor/bundle`.
2. Run `./bin/check` to verify the site with `jekyll doctor` and a full build.
3. If the preview is already running in the `servers` tmux session, reuse it instead of starting a duplicate server.
4. Otherwise run `./bin/serve` and open <http://127.0.0.1:4000>.

`./bin/serve` starts Jekyll with `--livereload --drafts`, so local preview includes draft content and refreshes automatically.

## Ruby environment

Always prefer the repo scripts over direct `bundle exec jekyll ...` commands. The scripts source `bin/_ruby_env`, which prefers Homebrew Ruby automatically; the macOS system Ruby is too old for this Jekyll/Bundler setup.

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
