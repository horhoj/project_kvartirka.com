import axios, { AxiosRequestConfig } from 'axios';
import { makeApiRequest } from '~/api';
import {
  FetchTodoListParams,
  FetchTodoListResponse,
} from '~/app/todo-list/types';
import { DEFAULT_HEADERS } from '~/config/api';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: { ...DEFAULT_HEADERS },
});

const apiRequest = makeApiRequest(axiosInstance);

export async function fetchTodoList(params: FetchTodoListParams) {
  const config: AxiosRequestConfig = {
    url: '/todos',
    params,
  };

  return apiRequest<FetchTodoListResponse>(config);
}
