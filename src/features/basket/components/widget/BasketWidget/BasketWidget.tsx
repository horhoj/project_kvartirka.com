'use client';
import styles from './BasketWidget.module.scss';
import plural from '~/utils/plural';

interface BasketWidgetProps {
  count: number;
}

const pluralDic: Record<string, string> = {
  one: 'астероид',
  few: 'астероида',
  many: 'астероидов',
};

export function BasketWidget({ count }: BasketWidgetProps) {
  return (
    <div className={styles.BasketWidget}>
      <div>
        <div className={styles.title}>Корзина</div>
        <div className={styles.asteroidCount}>
          {count} {plural(count, pluralDic)}
        </div>
      </div>
      <button className={styles.sendButton}>Отправить</button>
    </div>
  );
}
