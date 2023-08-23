'use client';
import { useContext } from 'react';
import { useAsteroidList } from '../../hooks/useAsteroidList';
import { AsteroidListHeader } from '../../components/AsteroidListHeader';
import { AsteroidList } from '../../components/AsteroidList';
import { AsteroidCard } from '../../components/AsteroidCard';

import { asteroidListDataTransform } from '../../utils/asteroidListDataTransform';
import { AsteroidData } from '../../types/common';
import { FetchAsteroidListNearEarthObject } from '../../types/FetchAsteroidListResponse';
import { Spinner } from '~/ui/Spinner';
import { formatDate, nextDate } from '~/utils/date';
import { asteroidContext } from '~/features/contexts/AsteroidContext';

interface AsteroidListContainerProps {
  asteroidDataFromSSR: AsteroidData;
}

export function AsteroidListContainer({
  asteroidDataFromSSR,
}: AsteroidListContainerProps) {
  const asteroidListRequest = useAsteroidList();
  const asteroidCtx = useContext(asteroidContext);

  const isDistanceInKilometers =
    asteroidCtx?.state.isDistanceInKilometers ?? true;

  const setIsDistanceInKilometers = (value: boolean) => {
    asteroidCtx?.dispatch({
      type: 'SET_IS_DISTANCE_IN_KILOMETERS',
      payload: value,
    });
  };

  const asteroidData: AsteroidData = {
    ...asteroidDataFromSSR,
    ...(asteroidCtx?.state.asteroidData ?? {}),
  };

  const asteroidTransformedData = asteroidListDataTransform(asteroidData);

  const onNextLoad = () => {
    let lastDate = formatDate(new Date());
    if (asteroidTransformedData.dateList.length > 0) {
      lastDate = asteroidTransformedData.dateList.slice(-1)[0];
    }
    asteroidListRequest.load(nextDate(lastDate));
  };

  const makeToggleThePresenceOfAnAsteroidInBasket =
    (asteroid: FetchAsteroidListNearEarthObject) => () => {
      asteroidCtx?.dispatch({
        type: 'TOGGLE_THE_PRESENCE_OF_AN_ASTEROID_IN_BASKET',
        payload: asteroid,
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
        {asteroidTransformedData.list.map((asteroid) => (
          <AsteroidCard
            asteroid={asteroid}
            key={asteroid.id}
            isDistanceInKilometers={isDistanceInKilometers}
            isShowAddToBasketButton={true}
            isInBasket={asteroidCtx?.state.basket[asteroid.id] !== undefined}
            toggleThePresenceOfAnAsteroidInBasket={makeToggleThePresenceOfAnAsteroidInBasket(
              asteroid,
            )}
          />
        ))}
      </AsteroidList>
      {/* <pre>{JSON.stringify(asteroidListRequest.asteroidList, null, 2)}</pre> */}
    </>
  );
}
