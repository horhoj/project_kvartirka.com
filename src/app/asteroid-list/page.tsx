import { addDays } from 'date-fns';
import { Metadata } from 'next';
import { APP_NAME } from '~/config/app';
import { asteroidListApi } from '~/features/asteroidList/api';
import { AsteroidListContainer } from '~/features/asteroidList/containers/AsteroidListContainer';
import { formatDate } from '~/utils/date';

export const metadata: Metadata = {
  title: `${APP_NAME} - список астероидов`,
  description: 'список астероидов',
};

export default async function AsteroidListPage() {
  const dataFromSSR = await asteroidListApi.fetchAsteroidList(
    formatDate(new Date()),
    formatDate(addDays(new Date(), 1)),
  );

  return dataFromSSR.data ? (
    <AsteroidListContainer
      asteroidDataFromSSR={dataFromSSR.data.near_earth_objects}
    />
  ) : (
    <>не удалось загрузить данные в режиме SSR</>
  );
}
