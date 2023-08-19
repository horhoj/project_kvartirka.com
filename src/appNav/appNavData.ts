import { AppNavItem } from '~/appNav/types';
import { routeList } from '~/config/routes';
import { getUUID } from '~/utils/getUUID';

export const AppNavData: AppNavItem[] = [
  {
    id: getUUID(),
    path: routeList.asteroidList,
    text: 'asteroid list',
  },

  {
    id: getUUID(),
    path: routeList.todoList,
    text: 'todo list',
  },
];
