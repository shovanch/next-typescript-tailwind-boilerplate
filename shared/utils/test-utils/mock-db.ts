/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  // Create a "user" model,
  post: {
    id: primaryKey(String),
    userId: String,
    title: String,
    body: String,
  },
});
