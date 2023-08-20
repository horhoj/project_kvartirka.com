import { useContext, useEffect } from 'react';
import { asteroidListApi } from '../api';
import { asteroidListDataTransform } from '../utils/asteroidListDataTransform';
import { asteroidContext } from '../contexts/AsteroidContext';
import { useApiRequest } from '~/api/hooks';
import { nextDate, prevDate } from '~/utils/date';

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
  const asteroidList = asteroidListDataTransform(data);
  const dateList = Object.keys(data).sort();
  const minDate = dateList.length > 0 ? dateList[0] : null;
  const maxDate = dateList.length > 0 ? dateList[dateList.length - 1] : null;

  const loadNext = () => {
    if (maxDate) {
      load(nextDate(maxDate));
    }
  };

  const loadPrev = () => {
    if (minDate) {
      load(prevDate(minDate));
    }
  };

  return {
    load,
    loadNext,
    loadPrev,
    loadPeriod,
    dateList,
    maxDate,
    minDate,
    asteroidList,
    isLoading: fetchAsteroidListRequest.isLoading,
    error: fetchAsteroidListRequest.error,
  };
}
