import { FetchAsteroidListNearEarthObject } from '../types/FetchAsteroidListResponse';
import { AsteroidData } from '../types/common';

export function asteroidListDataTransform(data: AsteroidData) {
  const list: FetchAsteroidListNearEarthObject[] = [];
  const dateList = Object.keys(data).sort();

  for (const key of dateList) {
    for (const asteroid of data[key]) {
      list.push(asteroid);
    }
  }

  return { list, dateList };
}
