# vitest-in-source-test-bug-reproduction

This repository demonstrates unexpected behavior related to vitest's in-source testing feature/workflow whereby it would seem that any file containing the string `import.meta.vitest` anywhere in the file is treated as a candidate for test running and, thus, fails should the file not contain an actual test suite.

The following cases are included:

1. `import.meta.vitest` is defined inside `vite.config.ts`.
2. `import.meta.vitest` is included in a file, but the line on which it appears is commented out.
3. `import.meta.vitest` is logged to the console.

Steps to reproduce:

1. `pnpm install`

2. `pnpm run test`
