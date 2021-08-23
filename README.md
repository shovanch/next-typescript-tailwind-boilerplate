## NextJs with Typescript, Tailwind

## Base Folder Structure

```

  ├── /public
  │    ├── /images
  │    ├── /fonts
  ├── /src
  │    ├── /tests
  │    │    ├── /e2e (end-to-end test-files)
  │    │    ├── /test-results (end-to-end test generated screenshots or videos)
  │    │    ├── /utils
  │    │    │    ├── test-setup.tsx (setup custom reusable wrapper for tests)
  │    │    │    ├── mock-db.ts (mock database)
  │    │    │    ├── generate-data.ts (generate data for mock database)
  │    │    │    ├── server-handlers.ts (mock route interceptors for msw)
  │    │    │    ├── server.ts (test mock server setup for msw)
  │    ├── /shared
  │    │    ├── /components
  │    │    │    ├── /Component
  │    │    │    │    ├── Component.js/tsx
  │    │    │    │    ├── Component.test.js/tsx
  │    │    │    │    ├── Component.module.scss (*If needed)
  │    │    │    ├── index.js (re-exports  the components, for cleaner path resolve)
  │    │    ├── /services
  │    │    │    ├── api-client.ts (setup global api instance of axios, and base handleQuery, handleMutation functions)
  │    │    │    ├── queries.service.ts
  │    │    │    ├── mutations.service.ts
  │    │    │    ├── index.ts (re-exports the shared queries and mutations)
  │    │    ├── /hooks
  │    │    ├── /contexts
  │    │    │    ├── app-providers.tsx (encapsulates app-wide providers like ReactQueryClientProvider,ThemeProvider etc)
  │    │    ├── /utils (app-wide shareable things)
  │    │    │    ├── utils.ts
  │    │    │    ├── index.ts (re-exports the utils funcs files as needed)
  │    │    ├── /styles (app-wide global styles, component styles are scored there with CSS modules)
  │    │    │    ├── globals.css (all tailwind styles)
  │    │    │    ├── _app.global.scss (*if needed)
  │    │    │    ├── _variables.global.scss (*if needed, declare css variables)
  │    │    │    ├── index.scss (*if needed, bundles and exports the global styles to be imported in root index.js)
  │    ├── /views (co-locates files that are used on a page only)
  │    │    ├── /Page
  │    │    │    ├── /components
  │    │    │    │    ├── /PageComponent
  │    │    │    ├── Page.tsx
  │    │    │    ├── Page.test.tsx
  │    │    │    ├── Page.module.scss
  │    │    │    ├── page.service.ts
  │    │    │    ├── page.utils.ts
  │    ├── /pages (nextjs treats each page as route itself)
  │    ├── /types (shareable types)
  │    ├── config.ts (exports the process.env variables)
  ├── .env.test (test env vars)
  ├── .env.local (local env vars)
  ├── playwright.config.ts (config for e2e playwright tests)
  ├── jest.config.ts (jest config)
  ├── jest.setup.ts (jest setup for tests hooks)
  └── playwright.config.ts (config for e2e playwright tests)

```

- Uses `axios` for api-calls, and `react-query` for remote data-state and cache

### Aliases

Aliases are for easier imports. Aliases can be used to import like `import { something } from '@/shared/components/....'`,

- Aliases are setup in `tsonfig.json` for vs-code path-resolve, `jest.config.js` for jest moduleNameResolver

**Default aliases setup**

- `@/` for `./`: from root

### Test

- Uses `react-testing-library` with `jest` as test-runner
- `msw` to mock api calls
- Base test setup can be found in `jest.config.js` and `jest.setup.js`
- Test-utils functions and data are in `src/tests/utils*`
- Uses `playwright/test` for e2e tests

## Features
