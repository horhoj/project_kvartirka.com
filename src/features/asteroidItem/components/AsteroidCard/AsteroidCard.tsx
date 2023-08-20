import { FetchAsteroidItemResponse } from '../../types/FetchAsteroidItemResponse';
import { AsteroidCardSize } from '../AsteroidCardSize';
import { CloseApproachDatumList } from '../CloseApproachDatumList';
import styles from './AsteroidCard.module.scss';
import { getLocaleDate } from '~/utils/date';

interface AsteroidCardProps {
  asteroid: FetchAsteroidItemResponse;
}

export function AsteroidCard({ asteroid }: AsteroidCardProps) {
  return (
    <div className={styles.AsteroidCard}>
      <div className={styles.block}>
        <div className={styles.blockTitle}>Общие параметры</div>
        <div>
          <span>ИД:</span> {asteroid.id}
        </div>
        <div>
          <span>Наименование:</span> {asteroid.name}
        </div>
        <div>
          <span>Абсолютная магнитуда:</span> {asteroid.absolute_magnitude_h}
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}>Размеры астероида</div>
        <AsteroidCardSize estimatedDiameter={asteroid.estimated_diameter} />
      </div>

      <div className={styles.block}>
        <div className={styles.blockTitle}>Орбитальные данные</div>
        <div>
          <span>Афелий:</span> {asteroid.orbital_data.aphelion_distance}
        </div>
        <div>
          <span>Долгота восходящего узла:</span>{' '}
          {asteroid.orbital_data.ascending_node_longitude}
        </div>
        <div>
          <span>Дата дуги в днях:</span>{' '}
          {asteroid.orbital_data.data_arc_in_days}
        </div>
        <div>
          <span>эксцентриситет:</span> {asteroid.orbital_data.eccentricity}
        </div>
        <div>
          <span>Эпоха колебаний:</span> {asteroid.orbital_data.epoch_osculation}
        </div>
        <div>
          <span>Солнечное равноденствие:</span> {asteroid.orbital_data.equinox}
        </div>
        <div>
          <span>Дата первого наблюдения:</span>{' '}
          {getLocaleDate(asteroid.orbital_data.first_observation_date)}
        </div>
        <div>
          <span>Склонность:</span> {asteroid.orbital_data.inclination}
        </div>
        <div>
          <span>Инвариант Тиссерана к Юпитеру:</span>{' '}
          {asteroid.orbital_data.jupiter_tisserand_invariant}
        </div>
        <div>
          <span>Дата последнего наблюдения:</span>{' '}
          {getLocaleDate(asteroid.orbital_data.last_observation_date)}
        </div>
        <div>
          <span>Средняя аномалия:</span> {asteroid.orbital_data.mean_anomaly}
        </div>
        <div>
          <span>Среднее движение:</span> {asteroid.orbital_data.mean_motion}
        </div>
        <div>
          <span>пересечение минимальной орбиты:</span>{' '}
          {asteroid.orbital_data.minimum_orbit_intersection}
        </div>
        <div>
          <span>использованные наблюдения:</span>{' '}
          {asteroid.orbital_data.observations_used}
        </div>
        <div>
          <span>описание орбитального класса: </span>
          {asteroid.orbital_data.orbit_class.orbit_class_description}
        </div>
        <div>
          <span>диапазон класса орбиты: </span>
          {asteroid.orbital_data.orbit_class.orbit_class_range}
        </div>
        <div>
          <span>тип орбитального класса: </span>
          {asteroid.orbital_data.orbit_class.orbit_class_type}
        </div>
        <div>
          <span>дата определения орбиты: </span>
          {getLocaleDate(asteroid.orbital_data.orbit_determination_date)}
        </div>
        <div>
          <span>идентификатор орбиты:</span> {asteroid.orbital_data.orbit_id}
        </div>
        <div>
          <span>неопределенность орбиты:</span>{' '}
          {asteroid.orbital_data.orbit_uncertainty}
        </div>
        <div>
          <span>орбитальный период:</span>{' '}
          {asteroid.orbital_data.orbital_period}
        </div>
        <div>
          <span>аргумент перигелия:</span>{' '}
          {asteroid.orbital_data.perihelion_argument}
        </div>
        <div>
          <span>перигелийное расстояние:</span>{' '}
          {asteroid.orbital_data.perihelion_distance}
        </div>
        <div>
          <span>время перигелия:</span> {asteroid.orbital_data.perihelion_time}
        </div>
        <div>
          <span>большая полуось:</span> {asteroid.orbital_data.semi_major_axis}
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.blockTitle}>Данные о близком сближении</div>
        <CloseApproachDatumList
          closeApproachDatumList={asteroid.close_approach_data}
        />
      </div>
    </div>
  );
}
