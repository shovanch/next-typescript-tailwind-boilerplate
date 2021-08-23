import faker from "faker";

import { db } from "./mock-db";

import { FAKER_SEED } from "@/shared/utils/constants";

faker.seed(FAKER_SEED);
/**
 * When we're doing a query and want to have some data in the db before test
 */
export const seedPosts = (size: number = 10): void => {
  return new Array(size).fill(0).forEach(() => {
    db.post.create({
      id: faker.datatype.uuid(),
      userId: faker.datatype.uuid(),
      title: faker.datatype.string(),
      body: faker.datatype.string(),
    });
  });
};
