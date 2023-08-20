import Link from 'next/link';
import styles from './AsteroidBackButton.module.scss';
import { routeList } from '~/config/routes';

export function AsteroidBackButton() {
  return (
    <div className={styles.AsteroidBackButton}>
      <Link href={routeList.asteroidList} className={styles.link}>
        Назад к списку астероидов
      </Link>
    </div>
  );
}
