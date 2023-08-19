import { ReactNode } from 'react';
import styles from './DefaultLayouts.module.scss';
import { AppNav } from '~/appNav';

interface DefaultLayoutsProps {
  children: ReactNode;
}
export function DefaultLayouts({ children }: DefaultLayoutsProps) {
  return (
    <div className={styles.DefaultLayouts}>
      <nav>
        <AppNav />
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
