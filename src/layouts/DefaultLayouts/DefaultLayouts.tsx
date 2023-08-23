import { ReactNode } from 'react';
import styles from './DefaultLayouts.module.scss';
import { Header } from '~/features/Header';
import { Footer } from '~/features/Footer';
import { BasketWidgetContainer } from '~/features/basket/containers/BasketWidgetContainer';

interface DefaultLayoutsProps {
  children: ReactNode;
}
export function DefaultLayouts({ children }: DefaultLayoutsProps) {
  return (
    <>
      <BasketWidgetContainer />
      <div className={styles.DefaultLayouts}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
