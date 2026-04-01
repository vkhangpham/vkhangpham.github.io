# Learnings

Capture corrections, knowledge gaps, and best practices discovered during work.

**Categories**: correction | knowledge_gap | best_practice | insight
**Areas**: frontend | backend | infra | tests | docs | config | general
**Statuses**: pending | in_progress | resolved | wont_fix | promoted | promoted_to_skill

## Entry Template

```markdown
## [LRN-YYYYMMDD-001] best_practice

**Logged**: 2026-03-24T09:00:00Z
**Priority**: medium
**Status**: pending
**Area**: general

### Summary
One-line description of the learning

### Details
What happened, what was wrong, and what is now understood

### Suggested Action
Concrete prevention rule or improvement to apply next time

### Metadata
- Source: conversation | error | user_feedback | docs
- Related Files: path/to/file.ext
- Tags: tag1, tag2
- See Also: LRN-YYYYMMDD-000
- Pattern-Key: simplify.dead-code
- Recurrence-Count: 1
- First-Seen: 2026-03-24
- Last-Seen: 2026-03-24

---
```

## Resolution Block

Add after `Metadata` when the issue is fixed or promoted:

```markdown
### Resolution
- **Resolved**: 2026-03-24T10:00:00Z
- **Commit/PR**: abc123 or #42
- **Notes**: Brief description of what changed
```

## Promotion Block

Use when the learning becomes durable agent guidance:

```markdown
**Status**: promoted
**Promoted**: AGENTS.md
```

Use when extracting a reusable skill:

```markdown
**Status**: promoted_to_skill
**Skill-Path**: /absolute/path/to/skill
```

## [LRN-20260327-001] best_practice

**Logged**: 2026-03-27T07:05:29Z
**Priority**: high
**Status**: promoted
**Promoted**: AGENTS.md
**Area**: config

### Summary
Prefer a modern Homebrew Ruby for local Jekyll work instead of macOS system Ruby.

### Details
The repo's Jekyll setup initially ran through `/usr/bin/ruby` (`2.6.10`), which is too old for current Jekyll dependencies because `ffi 1.17.4` requires Ruby 3+. The durable fix was to install Homebrew Ruby and make repo scripts explicitly prefer that Ruby before invoking Bundler or Jekyll.

### Suggested Action
For Ruby-based static sites on macOS, add a small environment bootstrap in repo scripts so local commands do not accidentally fall back to Apple-provided Ruby.

### Metadata
- Source: error
- Related Files: Gemfile, README.md, bin/_ruby_env, bin/setup, bin/check, bin/serve
- Tags: ruby, jekyll, bundler, macos, github-pages
- See Also: ERR-20260327-001
- Pattern-Key: ruby.system-ruby-incompatible
- Recurrence-Count: 1
- First-Seen: 2026-03-27
- Last-Seen: 2026-03-27

### Resolution
- **Resolved**: 2026-03-27T07:05:29Z
- **Commit/PR**: uncommitted
- **Notes**: Installed Homebrew Ruby 4.0.2, added `bin/_ruby_env`, and verified the site with `./bin/check` plus a live local serve.

## [LRN-20260328-001] correction

**Logged**: 2026-03-28T10:56:40Z
**Priority**: medium
**Status**: promoted
**Promoted**: AGENTS.md
**Area**: general

### Summary
Check the user's existing `tmux` preview session before starting another local Jekyll server.

### Details
During verification, a second `./bin/serve` was started even though the user already hosts this site from the `servers` tmux session. That created confusing port/process signals during checking and was unnecessary once the existing preview workflow was known.

### Suggested Action
Before launching a local preview server in this repo, inspect `tmux ls` and the `servers` session, then prefer `curl http://127.0.0.1:4000` against the running preview when it already exists.

### Metadata
- Source: user_feedback
- Related Files: README.md, bin/serve
- Tags: tmux, jekyll, preview, local-dev
- See Also: LRN-20260327-001
- Pattern-Key: preview.tmux-existing-server
- Recurrence-Count: 1
- First-Seen: 2026-03-28
- Last-Seen: 2026-03-28

### Resolution
- **Resolved**: 2026-03-28T10:56:40Z
- **Commit/PR**: uncommitted
- **Notes**: Verified the running tmux-backed preview with `curl` and used that as the authoritative local check instead of keeping a duplicate server process.

## [LRN-20260328-002] correction

**Logged**: 2026-03-28T11:01:00Z
**Priority**: medium
**Status**: promoted
**Promoted**: AGENTS.md
**Area**: frontend

### Summary
Use explicit SVG icon dimensions and a shared include for repeated social link groups.

### Details
The first social-link pass relied mainly on CSS to size inline SVG icons, and the rendered result appeared oversized to the user. The safer pattern in this repo is to give each inline SVG a dedicated class plus explicit `width` and `height` attributes, then reuse the same markup from an include so Home and About stay consistent.

### Suggested Action
For future icon UI on this site, set explicit dimensions in the SVG markup, keep a `.social-icon` class for CSS reinforcement, and extract repeated link clusters into `_includes/` instead of duplicating them across pages.

### Metadata
- Source: user_feedback
- Related Files: _includes/social-links.html, _layouts/home.html, about.md, assets/css/site.css
- Tags: svg, icons, frontend, includes, social-links
- See Also: LRN-20260328-001
- Pattern-Key: frontend.inline-svg-explicit-size
- Recurrence-Count: 1
- First-Seen: 2026-03-28
- Last-Seen: 2026-03-28

### Resolution
- **Resolved**: 2026-03-28T11:01:00Z
- **Commit/PR**: uncommitted
- **Notes**: Added `_includes/social-links.html`, switched Home and About to the shared include, and gave each SVG explicit `18x18` dimensions with a `.social-icon` class.

## [LRN-20260330-001] correction

**Logged**: 2026-03-30T08:06:52Z
**Priority**: medium
**Status**: promoted
**Promoted**: AGENTS.md
**Area**: frontend

### Summary
Do not rewrite site copy during design or layout tasks unless the user explicitly asks for content changes.

### Details
While reviewing and improving the blog UI, the user clarified that written content on the page should be treated as locked by default. Future design passes in this repo should adjust structure, spacing, and styling without editing the actual blog or page copy unless content work is explicitly requested.

### Suggested Action
When working on this site, treat blog posts, page prose, and other written copy as content-owned. For UI tasks, preserve the exact wording and confine changes to layout, markup structure, and styling unless the user clearly asks for copy edits.

### Metadata
- Source: user_feedback
- Related Files: AGENTS.md, _layouts/home.html, assets/css/site.css
- Tags: content, copy, frontend, workflow, guardrail
- See Also: LRN-20260328-002
- Pattern-Key: content.copy-preservation
- Recurrence-Count: 1
- First-Seen: 2026-03-30
- Last-Seen: 2026-03-30

### Resolution
- **Resolved**: 2026-03-30T08:06:52Z
- **Commit/PR**: uncommitted
- **Notes**: Promoted the copy-preservation rule into `AGENTS.md` and implemented the home-page layout update without changing any written content.

## [LRN-20260330-002] best_practice

**Logged**: 2026-03-30T22:32:01+0700
**Priority**: medium
**Status**: promoted
**Promoted**: AGENTS.md
**Area**: docs

### Summary
Keep `README.md` and repo agent guidance in sync whenever the actual Jekyll workflow changes.

### Details
The repo already had correct workflow details spread across scripts, `AGENTS.md`, and earlier learning notes, but the human-facing `README.md` had drifted into a thinner version of the setup. That made it easy for the documented flow to omit important behavior such as the Homebrew Ruby bootstrap, the existing tmux preview workflow, the real permalink shape, and the current post-authoring helpers.

### Suggested Action
When scripts, preview behavior, permalink rules, or writing conventions change, update `README.md` and the related agent docs together in the same task instead of letting one source of truth lag behind.

### Metadata
- Source: conversation
- Related Files: README.md, AGENTS.md, _config.yml, bin/setup, bin/check, bin/serve, bin/new-post
- Tags: docs, readme, workflow, jekyll, maintenance
- See Also: LRN-20260327-001, LRN-20260328-001
- Pattern-Key: docs.sync-human-and-agent-guides
- Recurrence-Count: 1
- First-Seen: 2026-03-30
- Last-Seen: 2026-03-30

### Resolution
- **Resolved**: 2026-03-30T22:32:01+0700
- **Commit/PR**: uncommitted
- **Notes**: Refreshed `README.md` to match the live repo workflow and promoted the prevention rule into `AGENTS.md`.

## [LRN-20260401-001] correction

**Logged**: 2026-04-01T08:15:00+0700
**Priority**: medium
**Status**: resolved
**Area**: frontend

### Summary
For small theme controls on this site, use one official Tabler icon per mode, keep a single placement in shared chrome, and reset native button appearance before custom styling.

### Details
The first dark-mode toggle used visible text and overlapping icon states, which the user corrected because the control should read as a single icon depending on the active mode. Follow-up corrections showed two more durable issues: the embedded `flame` and `flame-off` paths must be checked against Tabler's official source instead of recreated from memory, and the theme switch should exist only once in the shared header rather than being duplicated inside reader settings. The wording also works better when it follows the site's bonfire metaphor instead of falling back to generic "switch to dark/light mode" copy.

### Suggested Action
When adding compact utility controls to this site, prefer a single explicit icon state, verify SVG paths against the official icon source, keep the control in one shared location unless duplication is explicitly requested, keep any descriptive copy screen-reader-only, and set `appearance: none` plus `-webkit-appearance: none` before styling the button.

### Metadata
- Source: user_feedback
- Related Files: _includes/theme-toggle.html, _includes/reader-controls.html, _layouts/default.html, assets/css/site.css, assets/js/theme-toggle.js
- Tags: dark-mode, buttons, tabler, safari, accessibility, frontend, tooltips
- See Also: LRN-20260328-002
- Pattern-Key: frontend.icon-toggle-single-state
- Recurrence-Count: 2
- First-Seen: 2026-04-01
- Last-Seen: 2026-04-01

### Resolution
- **Resolved**: 2026-04-01T08:15:00+0700
- **Commit/PR**: 6a064f8 (follow-up tooltip/icon refinements uncommitted)
- **Notes**: Reworked the toggle into a single icon-only control, removed the duplicate reader-settings switch, replaced remembered icon paths with official Tabler `flame` and `flame-off` SVGs, added native-button appearance resets, and updated the tooltip language to use the bonfire metaphor.
