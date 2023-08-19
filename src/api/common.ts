import axios, { AxiosRequestConfig } from 'axios';

interface RequestResponse<RT = unknown, E = unknown> {
  data: RT | null;
  error: E | null;
}

export const makeApiRequest =
  (axiosInstance: ReturnType<typeof axios.create>) =>
  async <RT = unknown, E = unknown>(
    config: AxiosRequestConfig,
  ): Promise<RequestResponse<RT, E>> => {
    const response: RequestResponse<RT, E> = { data: null, error: null };
    try {
      const res = await axiosInstance.request<RT>(config);
      response.data = res.data;
    } catch (e) {
      response.error = e as E;
    }
    return response;
  };
