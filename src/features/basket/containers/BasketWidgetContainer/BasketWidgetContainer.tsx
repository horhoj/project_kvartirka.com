'use client';
import { useContext } from 'react';
import { BasketWidget } from '../../components/widget/BasketWidget';
import { asteroidContext } from '~/features/contexts/AsteroidContext';

export function BasketWidgetContainer() {
  const asteroidCtx = useContext(asteroidContext);

  const asteroidCount = Object.keys(asteroidCtx?.state.basket ?? {}).length;

  return <BasketWidget count={asteroidCount} />;
}
