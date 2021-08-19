import { handleQuery } from "./api-client";

export const fetchAuthUser = async () => handleQuery({ resourceUrl: `/user` });
