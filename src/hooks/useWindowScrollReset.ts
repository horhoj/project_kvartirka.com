import { useEffect } from 'react';

export function useWindowScrollReset(data: unknown) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [data]);
}
