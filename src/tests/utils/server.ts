import { setupServer } from "msw/node";

import { db } from "./mock-db";
import { handlers } from "./server-handlers";

// const server = setupServer(...handlers);

// User data-model handlers from msw where applicable
const server = setupServer(...db.post.toHandlers("rest"), ...handlers);

export * from "msw";

export { server };
