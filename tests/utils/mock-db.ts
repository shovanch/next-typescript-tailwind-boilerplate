/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import faker from "faker";
import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  // Create a "user" model,
  post: {
    id: primaryKey(faker.datatype.string),
    userId: faker.datatype.string,
    title: faker.datatype.string,
    body: faker.datatype.string,
  },
});
