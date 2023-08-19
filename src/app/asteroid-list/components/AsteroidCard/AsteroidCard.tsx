import styles from './AsteroidCard.module.scss';
import { FetchAsteroidListNearEarthObject } from '~/app/asteroid-list/types/FetchAsteroidListResponse';

interface AsteroidCardProps {
  asteroid: FetchAsteroidListNearEarthObject;
}
export function AsteroidCard({ asteroid }: AsteroidCardProps) {
  const closeApproachDate = new Date(
    asteroid.close_approach_data[0].close_approach_date,
  ).toLocaleDateString();

  return (
    <div className={styles.AsteroidCard}>
      AsteroidCard {asteroid.id} {closeApproachDate}
    </div>
  );
}
