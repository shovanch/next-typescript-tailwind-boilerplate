import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_ENDPOINT } from "../../config";

// Axios instance
const api = axios.create();

// Global interceptor for auth token
api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    "Content-Type": "application/json",
  };

  return config;
});

/* ---- Base function to get data ---- */
export const handleQuery = async ({
  resourceUrl,
  queryParams,
}: {
  resourceUrl: string;
  queryParams?: any;
}): Promise<any> => {
  try {
    const response: AxiosResponse = await api.request({
      method: "GET",
      url: `${API_ENDPOINT}${resourceUrl}`,
      ...(queryParams && { params: { ...queryParams } }), // Pass params if there's query object passed
    });

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

/* ---- Base function for Data mutation requests -> POST, PUT, PATCH, DELETE ---- */
type MutationMethods = "POST" | "PUT" | "PATCH" | "DELETE";

export const handleMutation = async ({
  resourceUrl,
  method,
  reqBody,
}: {
  resourceUrl: string;
  method: MutationMethods;
  reqBody: any;
}): Promise<any> => {
  // Check if the passed method: POST, PUT, PATCH, DELETE
  if (!["POST", "PUT", "DELETE", "PATCH"].includes(method)) {
    return Promise.reject(new Error("Pass a valid method"));
  }

  try {
    const response: AxiosResponse = await api.request({
      method: `${method}`,
      url: `${API_ENDPOINT}${resourceUrl}/`,
      ...(reqBody && { data: reqBody }),
    });

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
