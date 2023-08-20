import { useState } from 'react';
import classNames from 'classnames';
import { EstimatedDiameter } from '../../types/FetchAsteroidItemResponse';
import { UnitsTypeButton } from '../UnitsTypeButton';
import styles from './AsteroidCardSize.module.scss';

interface AsteroidCardSizeProps {
  estimatedDiameter: EstimatedDiameter;
}

type EstimatedDiameterKeys = keyof EstimatedDiameter;

const unitsTypeList: [EstimatedDiameterKeys, string][] = [
  ['kilometers', 'в км'],
  ['meters', 'в метрах'],
  ['miles', 'в милях'],
  ['feet', 'в футах'],
];

export function AsteroidCardSize({ estimatedDiameter }: AsteroidCardSizeProps) {
  const [unitsType, setUnitsType] =
    useState<EstimatedDiameterKeys>('kilometers');

  return (
    <div className={styles.AsteroidCardSize}>
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
        <span className={styles.parameterCaption}>Минимальный диаметр:</span>{' '}
        {estimatedDiameter[unitsType].estimated_diameter_min}
      </div>
      <div>
        <span className={styles.parameterCaption}>Максимальный диаметр:</span>{' '}
        {estimatedDiameter[unitsType].estimated_diameter_max}
      </div>
    </div>
  );
}
