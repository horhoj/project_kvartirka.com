import { Metadata } from 'next';
import { APP_NAME } from '~/config/app';
import { AsteroidListContainer } from '~/app/asteroid-list/containers/AsteroidListContainer';

export const metadata: Metadata = {
  title: `${APP_NAME} - список астероидов`,
  description: 'список астероидов',
};

export default function AsteroidListPage() {
  return <AsteroidListContainer />;
}
