import { useEffect, useState } from 'react';
import { useApiRequest } from '~/api/hooks';
import { asteroidListApi } from '~/app/asteroid-list/api';
import { FetchAsteroidListNearEarthObject } from '~/app/asteroid-list/types/FetchAsteroidListResponse';
import { asteroidListDataTransform } from '~/app/asteroid-list/utils/asteroidListDataTransform';
import { nextDate, prevDate } from '~/app/asteroid-list/utils/date';

export function useAsteroidList() {
  const fetchAsteroidListRequest = useApiRequest(
    asteroidListApi.fetchAsteroidList,
  );

  const [data, setData] = useState<
    Record<string, FetchAsteroidListNearEarthObject[]>
  >({});

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
      setData((prev) => ({
        ...prev,
        ...nearEarthObjects,
      }));
    }
  }, [fetchAsteroidListRequest.data, fetchAsteroidListRequest.error]);

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
