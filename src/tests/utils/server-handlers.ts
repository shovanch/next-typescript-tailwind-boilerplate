/* eslint-disable import/prefer-default-export */
import faker from "faker";
import { rest } from "msw";

import { db } from "./mock-db";

import { APP_API_ENDPOINT } from "@/config";
import { FAKER_SEED } from "@/shared/utils/constants";

// (Optional) Seed `faker` to ensure reproducible
// random values of model properties.
faker.seed(FAKER_SEED);

export const handlers = [
  // Retrieve a single user from the database by ID.
  rest.get(`${APP_API_ENDPOINT}/posts/1s`, (req, res, ctx) => {
    const count = db.user.count();

    const post = db.user.findFirst({
      where: {
        id: {
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
