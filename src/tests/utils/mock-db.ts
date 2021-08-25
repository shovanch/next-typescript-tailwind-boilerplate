/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import faker from "faker";
import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  // Create a "user" model,
  user: {
    id: primaryKey(faker.datatype.string),
    first_name: faker.datatype.string,
    last_name: faker.datatype.string,
    email: faker.datatype.string,
    type: faker.datatype.string,
    created_at: faker.datatype.datetime,
  },
});
