'use client';
import styles from './Spinner.module.scss';
import { Portal } from '~/ui/Portal';

interface SpinnerProps {
  isShow: boolean;
}

export function Spinner({ isShow }: SpinnerProps) {
  return <Portal>{isShow && <div className={styles.Spinner} />}</Portal>;
}
