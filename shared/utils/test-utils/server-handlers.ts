/* eslint-disable import/prefer-default-export */
import faker from "faker";
import { rest } from "msw";

import { APP_API_ENDPOINT } from "@/config";
import { FAKER_SEED } from "@/shared/utils/constants";

import { db } from "./mock-db";
import { seedPosts } from "./generate-data";

// (Optional) Seed `faker` to ensure reproducible
// random values of model properties.
faker.seed(FAKER_SEED);

db.post.create({ id: "1", userId: "123", title: "test", body: "test" });

export const handlers = [
  // Retrieve a single user from the database by ID.
  rest.get(`${APP_API_ENDPOINT}/posts/1s`, (req, res, ctx) => {
    seedPosts();

    const posts = db.post.getAll();

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
