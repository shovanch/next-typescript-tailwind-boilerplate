import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { setLogger } from "react-query";

import { server } from "@/shared/utils/test-utils/server";

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
