import useInfiniteScroll from 'react-infinite-scroll-hook';
import styles from './AsteroidList.module.scss';

interface AsteroidListProps {
  children: React.ReactNode;
  isLoading: boolean;
  onNextLoad: () => void;
}
export function AsteroidList({
  children,
  isLoading,
  onNextLoad,
}: AsteroidListProps) {
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: true,
    onLoadMore: onNextLoad,
    disabled: false,
    rootMargin: '0px',
  });

  return (
    <div className={styles.AsteroidList}>
      {children}
      <div className={styles.activator}>
        <div ref={sentryRef}>Загрузка...</div>
      </div>
    </div>
  );
}
