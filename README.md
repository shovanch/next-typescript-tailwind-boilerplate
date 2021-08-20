## NextJs with Typescript, Tailwind

## Structure

```
.
└── /src
    ├── /assets
    │    ├── /images
    │    ├── /fonts
    ├── /shared
    │    ├── /components
    │    │    ├── /Component
    │    │    │    ├── Component.js/tsx
    │    │    │    ├── Component.test.js/tsx
    │    │    │    ├── Component.module.scss (*If needed)
    │    │    ├── index.js (re-exports  the components, for cleaner path resolve)
    │    ├── /services
    │    │    ├── api-client.ts (setup global api instance of axios, and base handleQuery, handleMutation functions)
    │    │    ├── queries.service.ts
    │    │    ├── mutations.service.ts
    │    │    ├── index.ts (re-exports the shared queries and mutations)
    │    ├── /hooks
    │    ├── /contexts
    │    │    ├── app-providers.tsx (encapsulates app-wider providers like ReactQueryClientProvider,ThemeProvider etc)
    │    ├── /utils (app-wide shareable things)
    │    │    ├── /test-utils
    │    │    ├── utils.ts
    │    │    ├── index.ts (re-exports the utils funcs files as needed)
    │    ├── /styles (app-wide global styles, component styles are scored there with CSS modules)
    │    │    ├── globals.css (all tailwind styles)
    │    │    ├── _app.global.scss (*if needed)
    │    │    ├── _variables.global.scss (*if needed, declare css variables)
    │    │    ├── index.scss (*if needed, bundles and exports the global styles to be imported in root index.js)
    ├── /views (co-locates files that are used on a page only)
    │    ├── /Page
    │    │    ├── /components
    │    │    │    ├── /PageComponent
    │    │    ├── Page.tsx
    │    │    ├── Page.test.tsx
    │    │    ├── Page.module.scss
    │    │    ├── page.service.ts
    │    │    ├── page.utils.ts
    ├── /pages (nextjs treats each page as route itself)
    ├── config.ts (exports the process.env variables)
    ├── index.ts
    └── App.tsx

```

- Uses `axios` for api-calls, and `react-query` for remote data-state and cache

### Aliases

Webpack aliases are setup with CRA and react-app-rewired for easier imports. Aliases can be used to import like `import { something } from '@/shared/components/....'`,

- Aliases are setup in `tsonfig.json` for vs-code path-resolve, `jest.config.js` for jest moduleNameResolver

**Default aliases setup**

- `@/....` for `src/....`

### Test

- Uses `react-testing-library` with `jest` as test-runner
- `msw` to mock api calls
- Base test setup can be found in `setupTests.js`
- Test-utils functions and data are in `src/shared/utils/test-utils/*`

## Features
