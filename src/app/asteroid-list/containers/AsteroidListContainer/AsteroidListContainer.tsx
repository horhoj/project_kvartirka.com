'use client';
import { useEffect } from 'react';
import { AsteroidCard } from '~/app/asteroid-list/components/AsteroidCard';
import { useAsteroidList } from '~/app/asteroid-list/hooks/useAsteroidList';
import { formatDate } from '~/app/asteroid-list/utils/date';
import { Spinner } from '~/ui/Spinner';

export function AsteroidListContainer() {
  const asteroidListRequest = useAsteroidList();

  useEffect(() => {
    asteroidListRequest.load(formatDate(new Date()));
  }, []);

  const test = () => {
    asteroidListRequest.loadPrev();
  };

  const test2 = () => {
    asteroidListRequest.loadNext();
  };

  return (
    <div>
      <Spinner isShow={asteroidListRequest.isLoading} />
      <div>
        <button onClick={test}>test</button>
      </div>
      <div>
        <button onClick={test2}>test2</button>
      </div>

      <div>
        {asteroidListRequest.asteroidList.map((asteroid) => (
          <AsteroidCard asteroid={asteroid} key={asteroid.id} />
        ))}
      </div>
      {/* <pre>{JSON.stringify(asteroidListRequest.data, null, 2)}</pre> */}
      <pre>{JSON.stringify(asteroidListRequest.asteroidList, null, 2)}</pre>
    </div>
  );
}
