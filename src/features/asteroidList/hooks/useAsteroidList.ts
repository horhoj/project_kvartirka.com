import { useContext, useEffect } from 'react';
import { asteroidListApi } from '../api';
import { asteroidContext } from '../contexts/AsteroidContext';
import { useApiRequest } from '~/api/hooks';

export function useAsteroidList() {
  const fetchAsteroidListRequest = useApiRequest(
    asteroidListApi.fetchAsteroidList,
  );

  const asteroidCtx = useContext(asteroidContext);

  const load = (date: string) => {
    fetchAsteroidListRequest.load(date, date);
  };

  const loadPeriod = (startDate: string, endDate: string) => {
    fetchAsteroidListRequest.load(startDate, endDate);
  };

  useEffect(() => {
    const nearEarthObjects =
      fetchAsteroidListRequest.data?.data?.near_earth_objects;
    if (fetchAsteroidListRequest.error === null && nearEarthObjects) {
      asteroidCtx?.dispatch({
        type: 'SET_ASTEROID_DATA',
        payload: {
          ...(asteroidCtx?.state.asteroidData ?? {}),
          ...nearEarthObjects,
        },
      });
    }
  }, [fetchAsteroidListRequest.data, fetchAsteroidListRequest.error]);

  const data = asteroidCtx?.state.asteroidData ?? {};

  return {
    load,
    data,
    loadPeriod,
    isLoading: fetchAsteroidListRequest.isLoading,
    error: fetchAsteroidListRequest.error,
  };
}
