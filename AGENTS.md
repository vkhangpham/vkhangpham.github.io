## Project Overview

- This repo is a minimal Jekyll blog for GitHub Pages.
- The site lives at `https://vkhangpham.github.io` and uses the permalink format `/:title/`.
- Posts use `<!--more-->` as the excerpt separator.
- Key edit surfaces:
  - `index.md` for the home-page intro
  - `about.md` for the bio/about copy
  - `_posts/*.md` for writing
  - `_layouts/*.html` and `_includes/*.html` for shared structure
  - `assets/css/site.css` for visual styling

## Task Tracking

- This repo does not currently use `bd` or another in-repo issue tracker.
- Do not introduce markdown TODO lists, alternate trackers, or stray planning files in the repo root unless the user asks for them.
- If you need to keep temporary planning or design notes, put them in `history/` instead of the project root.

## Documentation

- When repo scripts, preview behavior, permalink rules, or post-writing conventions change, update `README.md` and any related repo guidance in the same task so human-facing docs stay aligned with the live workflow.
- Keep repo-only docs and tooling paths such as `README.md`, `AGENTS.md`, `bin/`, and `history/` excluded from the published site output.

## Local Workflow

### Jekyll Commands

- Always prefer the repo scripts:
  - `./bin/setup`
  - `./bin/check`
  - `./bin/serve`
- These scripts source `bin/_ruby_env` and prefer Homebrew Ruby automatically.
- Do not rely on macOS system Ruby or direct `bundle exec jekyll ...` commands unless you have loaded the same environment first; the system Ruby is too old for this repo's Jekyll/Bundler setup.

### Preview Server

- Before starting a new local preview server, check whether the user is already hosting the site in tmux.
- The user may run the preview from the `servers` tmux session.
- If a preview is already running, prefer verifying with `curl http://127.0.0.1:4000` instead of spawning a duplicate `./bin/serve`.
- If you do start your own long-running preview, use tmux and watch the logs.

## Content and UI Conventions

### Posts

- Create new posts in `_posts/` with the filename format `YYYY-MM-DD-title.md`.
- Add front matter with at least `title`; `layout: post` is applied by `_config.yml`.
- Use `tags` and `description` when helpful.
- Use `<!--more-->` to control the archive/home excerpt.

### Written Content

- Never edit blog posts, page copy, or other written content already on the site unless the user explicitly asks for content changes.
- For UI or layout tasks, preserve the existing wording and limit changes to structure, styling, and presentation unless the user asks to rewrite copy.

### Shared UI

- Put repeated UI fragments in `_includes/` instead of duplicating markup across pages.
- Keep header, navigation, and other site-wide chrome in shared layouts/includes.

### Inline SVG Icons

- For inline SVG icons, set explicit `width` and `height` attributes in the markup.
- Keep important SVG presentation attributes (`fill`, `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`) on the SVG itself when possible, so the icon still behaves correctly if CSS is incomplete.
- Use a shared class such as `.social-icon` only as reinforcement, not as the sole source of sizing.

## Verification

- Run `./bin/check` after meaningful changes.
- For navigation or layout work, verify Home, About, Archive, and at least one post page in the local preview.
- When checking a running preview, use the real generated route shape from `_config.yml` and the current site output (for example, posts render at `/:title/`, not dated archive-style URLs).

## Important Rules

- Never edit `.env` files or other environment-variable files.
- Avoid destructive git operations unless the user explicitly asks for them in writing.
- Always check `git status` before committing.
- Keep commits scoped to the files you actually changed.
- Do not delete or overwrite user work you did not author unless the user explicitly asks.
