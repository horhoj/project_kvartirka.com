import { useEffect } from 'react';

export function useSaveWindowScrollTopPosition(lsKey: string) {
  useEffect(() => {
    const scrollTop = Number.parseInt(localStorage.getItem(lsKey) ?? '0');

    window.scrollBy(0, scrollTop);

    const scroll = () => {
      localStorage.setItem(lsKey, window.scrollY.toString());
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
}
