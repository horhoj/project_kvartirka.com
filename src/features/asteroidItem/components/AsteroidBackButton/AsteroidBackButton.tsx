'use client';
import { useRouter } from 'next/navigation';
import styles from './AsteroidBackButton.module.scss';

export function AsteroidBackButton() {
  const router = useRouter();

  const back = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className={styles.AsteroidBackButton}>
      <a href={'#'} className={styles.link} onClick={back}>
        Назад к списку астероидов
      </a>
    </div>
  );
}
