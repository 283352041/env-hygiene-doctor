# Env Hygiene Doctor

Audit environment-file hygiene before publishing a repo.

```bash
node ./bin/env-doctor.js
node ./bin/env-doctor.js --json
```

Checks for committed-looking `.env` files, missing `.env.example`, weak `.gitignore`, and literal secret patterns.

## Safe Examples

Use `.env.example` for variable names and harmless placeholder values. Keep real secrets in your shell, CI secret store, or deployment platform.

## CI Behavior

The CLI exits with a non-zero status for high or critical findings, making it suitable for lightweight repository hygiene checks.
