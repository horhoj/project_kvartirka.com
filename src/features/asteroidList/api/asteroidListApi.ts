import axios, { AxiosRequestConfig } from 'axios';
import { FetchAsteroidListResponse } from '../types/FetchAsteroidListResponse';
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

export async function fetchAsteroidList(startDate: string, endDate: string) {
  const config: AxiosRequestConfig = {
    method: 'get',
    url: '/feed',
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  };

  return apiRequest<FetchAsteroidListResponse>(config);
}
