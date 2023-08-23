'use client';
import styles from './Spinner.module.scss';

interface SpinnerProps {
  isShow: boolean;
}

export function Spinner({ isShow }: SpinnerProps) {
  return <>{isShow && <div className={styles.Spinner} />}</>;
}
