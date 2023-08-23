import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import { FetchAsteroidListNearEarthObject } from '../../types/FetchAsteroidListResponse';
import styles from './AsteroidCard.module.scss';
import { asteroidCardHelpers } from './helpers';
import { distanceArrow } from './svgList';
import asteroidImg from '~/assets/img/asteroid.png';
import dangerousImg from '~/assets/img/dangerous.svg';
import { routeList } from '~/config/routes';

interface AsteroidCardProps {
  asteroid: FetchAsteroidListNearEarthObject;
  isDistanceInKilometers: boolean;
  isInBasket: boolean;
  toggleThePresenceOfAnAsteroidInBasket: () => void;
  isShowAddToBasketButton: boolean;
}
export function AsteroidCard({
  asteroid,
  isDistanceInKilometers,
  toggleThePresenceOfAnAsteroidInBasket,
  isInBasket,
  isShowAddToBasketButton,
}: AsteroidCardProps) {
  const closeApproachDate = asteroidCardHelpers.getCloseApproachDate(asteroid);

  const distance = asteroidCardHelpers.getDistance(
    asteroid,
    isDistanceInKilometers,
  );

  const isBig = asteroidCardHelpers.getIsBig(asteroid);
  // вот не очень понял с диаметром, так как астероиды бывают сплюснутые,
  // поэтому решил использовать среднее значение между его максимом и минимумом
  const diameter = asteroidCardHelpers.getDiameter(asteroid);

  const isDangerous = asteroidCardHelpers.getIsDangerous(asteroid);

  const name = asteroidCardHelpers.getName(asteroid);
  const asteroidLink = `${routeList.asteroidItem}/${asteroid.id}`;

  return (
    <div className={styles.AsteroidCard}>
      {/* AsteroidCard {asteroid.id} {closeApproachDate} */}
      <div className={styles.date}>{closeApproachDate}</div>
      <div className={styles.middle}>
        <div className={styles.distance}>
          <div>{distance}</div>
          <div className={styles.distanceArrow}>
            {distanceArrow(styles.distanceArrowLeft)}
            {distanceArrow(styles.distanceArrowRight)}
          </div>
        </div>
        <div className={styles.asteroidImgWrapper}>
          <Image
            src={asteroidImg}
            alt="asteroid image"
            className={classNames(
              styles.asteroidImg,
              isBig && styles.asteroidBigImg,
            )}
          />
        </div>
        <div className={styles.asteroidNameAndSizeWrapper}>
          <Link className={styles.asteroidName} href={asteroidLink}>
            {name}
          </Link>
          <div className={styles.asteroidSize}>Ø {diameter} м</div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <button
            className={styles.orderButton}
            onClick={toggleThePresenceOfAnAsteroidInBasket}
          >
            {isInBasket ? ' в корзине' : 'заказать'}
          </button>
        </div>
        <div>
          {isDangerous ? (
            <span className={styles.isDangerous}>
              <Image
                src={dangerousImg}
                alt="dangerousImg"
                width={16}
                height={16}
                style={{ marginTop: '-5px' }}
              />
              Опасен
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
