import { Metadata } from 'next';
import { APP_NAME } from '~/config/app';
import { asteroidItemApi } from '~/features/asteroidItem/api';
import { AsteroidItemContainer } from '~/features/asteroidItem/containers/AsteroidItemContainer';

export const metadata: Metadata = {
  title: `${APP_NAME} - asteroid item`,
  description: 'todo list page',
};

interface AsteroidItemPageProps {
  params: { id: string };
}

export default async function AsteroidItemPage(props: AsteroidItemPageProps) {
  const res = await asteroidItemApi.fetchAsteroidItem(props.params.id);

  return <div>{res.data && <AsteroidItemContainer asteroid={res.data} />}</div>;
}
