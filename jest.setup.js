/* eslint-disable */
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { setLogger } from "react-query";
import { drop } from "@mswjs/data";

import { server } from "@/tests/utils/server";
import { seedUser } from "@/tests/utils/generate-data";
import { db } from "@/tests/utils/mock-db";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Seed the mockDB before each test
beforeEach(() => seedUser());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();

  // drop the db after each test, to keep th test state clean
  drop(db);
});

// Clean up after the tests are finished.
afterAll(() => server.close());

// silence react-query errors
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
