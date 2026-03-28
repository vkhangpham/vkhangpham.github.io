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
**Status**: resolved
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
