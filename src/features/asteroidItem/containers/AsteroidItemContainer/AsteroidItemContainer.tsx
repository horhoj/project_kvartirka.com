'use client';
import { AsteroidCard } from '../../components/AsteroidCard';
import { FetchAsteroidItemResponse } from '../../types/FetchAsteroidItemResponse';
import { AsteroidBackButton } from '../../components/AsteroidBackButton';

interface AsteroidItemContainerProps {
  asteroid: FetchAsteroidItemResponse;
}

export function AsteroidItemContainer({
  asteroid,
}: AsteroidItemContainerProps) {
  return (
    <>
      <AsteroidBackButton />
      <AsteroidCard asteroid={asteroid} />
    </>
  );
}
