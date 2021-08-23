import { setupServer } from "msw/node";

import { db } from "./mock-db";
import { handlers } from "./server-handlers";

// User data-model handlers from msw where applicable
// const server = setupServer(...db.post.toHandlers("rest"), ...handlers);
const server = setupServer(...handlers);

export * from "msw";

export { server };
