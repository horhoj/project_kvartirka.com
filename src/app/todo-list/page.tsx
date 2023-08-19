import { Metadata } from 'next';
import { todoListApi } from '~/app/todo-list/api';
import { APP_NAME } from '~/config/app';
import { TodoListContainer } from '~/app/todo-list/containers/TodoListContainer';

export const metadata: Metadata = {
  title: `${APP_NAME} - todo list`,
  description: 'todo list page',
};

interface TodoListPage {
  searchParams: {
    page?: string;
  };
}

export default async function TodoListPage(props: TodoListPage) {
  let ssrData: Awaited<ReturnType<typeof todoListApi.fetchTodoList>> | null =
    null;
  let ssrPage = 1;
  if (typeof window === 'undefined') {
    ssrPage = Number.parseInt(props.searchParams?.page ?? '1');
    ssrData = await todoListApi.fetchTodoList({
      limit: 10,
      skip: (ssrPage - 1) * 10,
    });
  }

  return (
    <div>
      <div>todoList</div>
      <TodoListContainer ssrData={ssrData?.data ?? null} startPage={ssrPage} />
      {ssrData?.error !== null && (
        <pre>{JSON.stringify(ssrData?.error, null, 2)}</pre>
      )}
    </div>
  );
}
