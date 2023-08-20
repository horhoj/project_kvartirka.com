import { ReactNode } from 'react';
import styles from './DefaultLayouts.module.scss';
import { BasketWidget } from '~/features/basket/widget/BasketWidget';
import { Header } from '~/features/Header';
import { Footer } from '~/features/Footer';

interface DefaultLayoutsProps {
  children: ReactNode;
}
export function DefaultLayouts({ children }: DefaultLayoutsProps) {
  return (
    <>
      <BasketWidget />
      <div className={styles.DefaultLayouts}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
