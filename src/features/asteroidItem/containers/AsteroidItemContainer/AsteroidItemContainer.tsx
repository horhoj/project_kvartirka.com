'use client';
import { AsteroidCard } from '../../components/AsteroidCard';
import { FetchAsteroidItemResponse } from '../../types/FetchAsteroidItemResponse';
import { AsteroidBackButton } from '../../components/AsteroidBackButton';
import { useWindowScrollReset } from '~/hooks/useWindowScrollReset';

interface AsteroidItemContainerProps {
  asteroid: FetchAsteroidItemResponse;
}

export function AsteroidItemContainer({
  asteroid,
}: AsteroidItemContainerProps) {
  useWindowScrollReset(asteroid);

  return (
    <>
      <AsteroidBackButton />
      <AsteroidCard asteroid={asteroid} />
    </>
  );
}
