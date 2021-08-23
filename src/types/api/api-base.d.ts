// https://stackoverflow.com/a/49479954/9640026
import { AxiosResponse } from "axios";

declare global {
  namespace API {
    // We're taking only the response from the whole error body returned by axios,
    // hence type of AxiosResponse
    type Error = AxiosResponse;

    interface QueryParams {
      id?: string;

      /** current page number for pagination */
      page?: number;

      /** the number of results to return per request. Default value is 15 */
      perPage?: number;
    }
  }
}
