import axios, { AxiosRequestConfig } from 'axios';
import { FetchAsteroidItemResponse } from '../types/FetchAsteroidItemResponse';
import { makeApiRequest } from '~/api';
import { DEFAULT_HEADERS } from '~/config/api';
import { ASTEROID_API_KEY } from '~/config/asteroid';

const axiosInstance = axios.create({
  baseURL: 'https://api.nasa.gov/neo/rest/v1',
  headers: { ...DEFAULT_HEADERS },
  params: {
    api_key: ASTEROID_API_KEY,
  },
});

const apiRequest = makeApiRequest(axiosInstance);

export async function fetchAsteroidItem(id: string) {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: `/neo/${id}`,
  };

  return apiRequest<FetchAsteroidItemResponse>(config);
}
