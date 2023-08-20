'use client';
import { useContext, useEffect } from 'react';
import { useAsteroidList } from '../../hooks/useAsteroidList';
import { AsteroidListHeader } from '../../components/AsteroidListHeader';
import { AsteroidList } from '../../components/AsteroidList';
import { AsteroidCard } from '../../components/AsteroidCard';
import { asteroidContext } from '../../contexts/AsteroidContext';
import { Spinner } from '~/ui/Spinner';
import { formatDate } from '~/utils/date';
import { useSaveWindowScrollTopPosition } from '~/hooks/useSaveWindowScrollTopPosition';

const ASTEROID_LIST_SCROLL_LS_KEY = 'ASTEROID_LIST_SCROLL_LS_KEY';

export function AsteroidListContainer() {
  const asteroidListRequest = useAsteroidList();
  const asteroidCtx = useContext(asteroidContext);
  useSaveWindowScrollTopPosition(ASTEROID_LIST_SCROLL_LS_KEY);

  useEffect(() => {
    if (asteroidListRequest.dateList.length === 0) {
      asteroidListRequest.load(formatDate(new Date()));
    }
  }, []);

  const onNextLoad = () => {
    asteroidListRequest.loadNext();
  };

  const isDistanceInKilometers =
    asteroidCtx?.state.isDistanceInKilometers ?? true;

  const setIsDistanceInKilometers = (value: boolean) => {
    asteroidCtx?.dispatch({
      type: 'SET_IS_DISTANCE_IN_KILOMETERS',
      payload: value,
    });
  };

  return (
    <>
      <Spinner isShow={asteroidListRequest.isLoading} />
      <AsteroidListHeader
        isDistanceInKilometers={isDistanceInKilometers}
        setIsDistanceInKilometers={setIsDistanceInKilometers}
      />
      <AsteroidList
        isLoading={asteroidListRequest.isLoading}
        onNextLoad={onNextLoad}
      >
        {asteroidListRequest.asteroidList.map((asteroid) => (
          <AsteroidCard
            asteroid={asteroid}
            key={asteroid.id}
            isDistanceInKilometers={isDistanceInKilometers}
          />
        ))}
      </AsteroidList>
      {/* <pre>{JSON.stringify(asteroidListRequest.asteroidList, null, 2)}</pre> */}
    </>
  );
}
