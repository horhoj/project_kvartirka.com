import { useState } from 'react';

export function useApiRequest<
  R = unknown,
  P extends unknown[] = unknown[],
  E = unknown,
>(requestCb: (...requestParams: P) => Promise<R>) {
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<E | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const load = async (...params: P) => {
    try {
      setIsLoading(true);
      setData(null);
      setError(null);
      const res = await requestCb(...params);
      setData(res);
    } catch (e) {
      setError(e as E);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, load };
}
