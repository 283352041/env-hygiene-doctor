# Env Hygiene Doctor

Audit environment-file hygiene before publishing a repo.

```bash
node ./bin/env-doctor.js
node ./bin/env-doctor.js --json
```

Checks for committed-looking `.env` files, missing `.env.example`, weak `.gitignore`, and literal secret patterns.
