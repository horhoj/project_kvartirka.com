'use client';
import styles from './BasketWidget.module.scss';

export function BasketWidget() {
  return (
    <div className={styles.BasketWidget}>
      <div>
        <div className={styles.title}>Корзина</div>
        <div className={styles.asteroidCount}>2 астероида</div>
      </div>
      <button className={styles.sendButton}>Отправить</button>
    </div>
  );
}
