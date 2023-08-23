import { useMemo, useState } from 'react';
import { CloseApproachDatum } from '../../types/FetchAsteroidItemResponse';
import { UnitsTypeButton } from '../UnitsTypeButton';
import { closeApproachDatumDataTransform } from '../../utils/closeApproachDatumDataTransform';
import styles from './CloseApproachDatumList.module.scss';
import { getLocaleDate } from '~/utils/date';

interface CloseApproachDatumListProps {
  closeApproachDatumList: CloseApproachDatum[];
}

type MissDistanceKeys = keyof CloseApproachDatum['miss_distance'];

const unitsTypeList: [MissDistanceKeys, string][] = [
  ['kilometers', 'в км'],
  ['astronomical', 'в астро. ед.'],
  ['lunar', 'в лунных ед.'],
  ['miles', 'в милях'],
];

export function CloseApproachDatumList({
  closeApproachDatumList,
}: CloseApproachDatumListProps) {
  const [unitsType, setUnitsType] = useState<MissDistanceKeys>('kilometers');
  const closeApproachDatumTransformedList = useMemo(
    () => closeApproachDatumDataTransform(closeApproachDatumList),
    [closeApproachDatumList],
  );

  return (
    <div className={styles.CloseApproachDatumList}>
      {closeApproachDatumTransformedList.map((closeApproachDatumItem) => (
        <div
          key={closeApproachDatumItem.id}
          className={styles.closeApproachDatumItemCard}
        >
          <div>
            <span className={styles.parameterCaption}>Дата сближения:</span>{' '}
            {getLocaleDate(closeApproachDatumItem.close_approach_date)}
          </div>

          <div className={styles.unitsTypeBtnWrap}>
            {unitsTypeList.map((item) => (
              <UnitsTypeButton
                key={item[0]}
                isActive={unitsType === item[0]}
                onClick={() => setUnitsType(item[0])}
              >
                {item[1]}
              </UnitsTypeButton>
            ))}
          </div>
          <div>
            <span className={styles.parameterCaption}>Расстояние:</span>{' '}
            {closeApproachDatumItem.miss_distance[unitsType]}
          </div>
        </div>
      ))}
    </div>
  );
}
