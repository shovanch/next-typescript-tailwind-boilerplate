import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from "axios";

import { APP_API_ENDPOINT } from "../../config";

// https://typescript.tv/best-practices/error-ts1196-catch-clause-variable-type-annotation/#Type-Guards
// Type guard with "type predicate"
function isAxiosError(candidate: {
  isAxiosError: boolean;
}): candidate is AxiosError {
  return candidate.isAxiosError === true;
}

// Axios instance
const api: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Global interceptor for auth token
api.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

/* ---- Base function to get data ---- */
export const handleQuery = async <T, U>(config: {
  resourceUrl: string;
  queryParams?: U;
}): Promise<T> => {
  try {
    const response = await api.request({
      method: "GET",
      url: `${APP_API_ENDPOINT}${config.resourceUrl}`,
      ...(config.queryParams && { params: { ...config.queryParams } }), // Pass params if there's query object passed
    });

    return await Promise.resolve(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return await Promise.reject(error.response);
    }

    return await Promise.reject(error);
  }
};

/* ---- Base function for Data mutation requests -> POST, PUT, PATCH, DELETE ---- */
type MutationMethods = "POST" | "PUT" | "PATCH" | "DELETE";

export const handleMutation = async <T, U>(config: {
  resourceUrl: string;
  method: MutationMethods;
  reqBody?: U;
}): Promise<T> => {
  // Check if the passed method: POST, PUT, PATCH, DELETE
  if (!["POST", "PUT", "DELETE", "PATCH"].includes(config.method)) {
    return Promise.reject(new Error("Pass a valid method"));
  }

  try {
    const response = await api.request({
      method: `${config.method}`,
      url: `${APP_API_ENDPOINT}${config.resourceUrl}/`,
      ...(config.reqBody && { data: config.reqBody }),
    });

    return await Promise.resolve(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return await Promise.reject(error.response);
    }

    return await Promise.reject(error);
  }
};
