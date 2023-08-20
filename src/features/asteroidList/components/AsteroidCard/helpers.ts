import { FetchAsteroidListNearEarthObject } from '../../types/FetchAsteroidListResponse';
import plural from '~/utils/plural';
import {
  ASTEROID_MIN_BIG_SIZE_METERS,
  MINIMUM_DISTANCE_IN_LUNAR_ORBITS_TO_RECOGNIZE_AN_ASTEROID_AS_DANGEROUS,
} from '~/config/asteroid';

export const asteroidCardHelpers = {
  getCloseApproachDate: (asteroid: FetchAsteroidListNearEarthObject) => {
    const date = new Date(asteroid.close_approach_data[0].close_approach_date);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'long' }).slice(0, 4);
    const year = date.toLocaleString('default', { year: 'numeric' });

    return `${day} ${month} ${year}`;
  },

  getDistance: (
    asteroid: FetchAsteroidListNearEarthObject,
    isDistanceInKilometers: boolean,
  ) => {
    const distanceInKmWithUnits =
      Math.round(
        Number.parseFloat(
          asteroid.close_approach_data[0].miss_distance.kilometers,
        ),
      ).toLocaleString() + ' км';

    const distanceInLunarOrbits = Math.round(
      Number.parseFloat(asteroid.close_approach_data[0].miss_distance.lunar),
    );

    const distanceInLunarOrbitsWithUnits =
      distanceInLunarOrbits.toLocaleString() +
      ' ' +
      plural(distanceInLunarOrbits, {
        one: 'лунная орбита',
        few: 'лунные орбиты',
        many: 'лунных орбит',
      });

    return isDistanceInKilometers
      ? distanceInKmWithUnits
      : distanceInLunarOrbitsWithUnits;
  },

  getIsBig: (asteroid: FetchAsteroidListNearEarthObject) => {
    return (
      (asteroid.estimated_diameter.meters.estimated_diameter_max +
        asteroid.estimated_diameter.meters.estimated_diameter_min) /
        2 >
      ASTEROID_MIN_BIG_SIZE_METERS
    );
  },

  getDiameter: (asteroid: FetchAsteroidListNearEarthObject) =>
    Math.round(
      (asteroid.estimated_diameter.meters.estimated_diameter_max +
        asteroid.estimated_diameter.meters.estimated_diameter_min) /
        2,
    ),

  getIsDangerous: (asteroid: FetchAsteroidListNearEarthObject) =>
    (asteroid.estimated_diameter.meters.estimated_diameter_max +
      asteroid.estimated_diameter.meters.estimated_diameter_min) /
      2 >
      ASTEROID_MIN_BIG_SIZE_METERS &&
    Number.parseFloat(asteroid.close_approach_data[0].miss_distance.lunar) <=
      MINIMUM_DISTANCE_IN_LUNAR_ORBITS_TO_RECOGNIZE_AN_ASTEROID_AS_DANGEROUS,

  getName: (asteroid: FetchAsteroidListNearEarthObject) => {
    const m = asteroid.name.match(/\(.+\)/gm);
    if (m === null) {
      return asteroid.name;
    }

    return m[0].slice(1, m[0].length - 1);
  },
};
