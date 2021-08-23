/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { handleQuery, handleMutation } from "./api-client";

// https://github.com/microsoft/TypeScript/issues/10571
// We're duplicating the Error result generics in useQuery call to type the Error
// Till TS allows skipping generics

export const fetchAuthUser = async (queryParams: Partial<RequestParams>) =>
  handleQuery<Response, Partial<RequestParams>>({
    resourceUrl: `/user`,
    queryParams,
  });

export const createAuthUser = async (reqBody: RequestBody) =>
  handleMutation<MutationResponse, RequestBody>({
    resourceUrl: `/user`,
    method: "PUT",
    reqBody,
  });

/* ---- Testing ---- */
export const fetchPost = async (
  queryParams?: Partial<RequestParams>
): Promise<Post> =>
  handleQuery<Post, Partial<RequestParams>>({
    resourceUrl: `/posts/1s`,
    queryParams,
  });

export const fetchPosts = async (queryParams: Partial<RequestParams>) =>
  handleQuery<Post[], Partial<RequestParams>>({
    resourceUrl: `/posts`,
    queryParams,
  });
