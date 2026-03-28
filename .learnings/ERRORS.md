# Errors

Capture command failures, tool failures, and unexpected runtime problems that future sessions should avoid repeating.

**Areas**: frontend | backend | infra | tests | docs | config | general
**Statuses**: pending | in_progress | resolved | wont_fix | promoted

## Entry Template

````markdown
## [ERR-YYYYMMDD-001] command-or-tool-name

**Logged**: 2026-03-24T09:00:00Z
**Priority**: high
**Status**: pending
**Area**: general

### Summary
Short description of what failed

### Error
```text
Paste the most useful error text here
```

### Context
- Command or operation attempted
- Inputs or parameters used
- Environment details if they mattered

### Suggested Fix
Best next step, workaround, or prevention rule

### Metadata
- Reproducible: yes | no | unknown
- Related Files: path/to/file.ext
- See Also: ERR-YYYYMMDD-000

---
````

## Resolution Block

```markdown
### Resolution
- **Resolved**: 2026-03-24T10:00:00Z
- **Commit/PR**: abc123 or #42
- **Notes**: Brief description of what changed
```

## [ERR-20260327-001] parallel-script-execution

**Logged**: 2026-03-27T07:05:29Z
**Priority**: medium
**Status**: resolved
**Area**: general

### Summary
Running a freshly created script in parallel with the `chmod +x` step can fail with a permission error.

### Error
```text
zsh:1: permission denied: ./bin/setup
```

### Context
- Command or operation attempted
- `chmod +x bin/setup bin/serve` and `./bin/setup` were started in parallel
- The execute step won the race before the permission change had completed

### Suggested Fix
Do not parallelize dependent shell steps. If one command prepares executability or filesystem state for another, run them sequentially.

### Metadata
- Reproducible: yes
- Related Files: bin/setup, bin/serve
- See Also: LRN-20260327-001

### Resolution
- **Resolved**: 2026-03-27T07:05:29Z
- **Commit/PR**: uncommitted
- **Notes**: Re-ran the commands sequentially and kept later setup/verification steps ordered when they depended on prior filesystem changes.
