import classNames from 'classnames';
import styles from './AsteroidListHeader.module.scss';

interface AsteroidListHeaderProps {
  isDistanceInKilometers: boolean;
  setIsDistanceInKilometers: (value: boolean) => void;
}
export function AsteroidListHeader({
  isDistanceInKilometers,
  setIsDistanceInKilometers,
}: AsteroidListHeaderProps) {
  return (
    <div className={styles.AsteroidListHeader}>
      <div className={styles.title}>Ближайшие подлёты астероидов</div>
      <div className={styles.buttonWrapper}>
        <button
          className={classNames(
            styles.button,
            isDistanceInKilometers && styles.buttonActive,
          )}
          onClick={() => setIsDistanceInKilometers(true)}
        >
          в километрах
        </button>
        <span className={styles.separator}>|</span>
        <button
          className={classNames(
            styles.button,
            !isDistanceInKilometers && styles.buttonActive,
          )}
          onClick={() => setIsDistanceInKilometers(false)}
        >
          в лунных орбитах
        </button>
      </div>
    </div>
  );
}
