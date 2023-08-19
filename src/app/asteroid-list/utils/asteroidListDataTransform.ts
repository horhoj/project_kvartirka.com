import { FetchAsteroidListNearEarthObject } from '~/app/asteroid-list/types/FetchAsteroidListResponse';

export function asteroidListDataTransform(
  data: Record<string, FetchAsteroidListNearEarthObject[]>,
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
