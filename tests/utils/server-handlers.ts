/* eslint-disable import/prefer-default-export */
import faker from "faker";
import { rest } from "msw";

import { APP_API_ENDPOINT } from "@/config";
import { FAKER_SEED } from "@/shared/utils/constants";

import { db } from "./mock-db";

// (Optional) Seed `faker` to ensure reproducible
// random values of model properties.
faker.seed(FAKER_SEED);

export const handlers = [
  // Retrieve a single user from the database by ID.
  rest.get(`${APP_API_ENDPOINT}/posts/1s`, (req, res, ctx) => {
    const count = db.post.count();
    console.log("file: server-handlers.ts ~ line 22 ~ rest.get ~ count", count);

    const post = db.post.findFirst({
      where: {
        userId: {
          equals: "123",
        },
      },
    });

    if (!post) {
      return res(ctx.status(404));
    }

    return res(ctx.json(post));
  }),
];