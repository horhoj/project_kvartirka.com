import { FetchAsteroidListNearEarthObject } from '../types/FetchAsteroidListResponse';
import { AsteroidData } from '../types/common';

export function asteroidListDataTransform(
  data: AsteroidData,
): FetchAsteroidListNearEarthObject[] {
  const result: FetchAsteroidListNearEarthObject[] = [];
  const keys = Object.keys(data).sort();

  for (const key of keys) {
    for (const asteroid of data[key]) {
      result.push(asteroid);
    }
  }

  return result;
}
