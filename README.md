My personal, bare minimum boilerplate for node projects.

# ESLint 9?

Not feasible yet: https://github.com/import-js/eslint-plugin-import/issues/2948

# Bun?

Would be very fast and convenient but...
- (as runtime) Debugging problems https://github.com/oven-sh/bun/issues?q=is%3Aissue+is%3Aopen+debug
- (as package manager) Flaky native addon support

# tsx

Too many problems with `ts-node` these days. `tsimp` frequently quits with errors but without error message where `tsx` has no problems.
