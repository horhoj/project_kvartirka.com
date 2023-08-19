'use client';
import { TodoList } from '~/app/todo-list/components/TodoList';
import { FetchTodoListResponse } from '~/app/todo-list/types';
import { Button } from '~/ui/Button';

interface TodoListContainerProps {
  ssrData: FetchTodoListResponse | null;
  startPage: number;
}

export function TodoListContainer({
  ssrData,
  startPage,
}: TodoListContainerProps) {
  const nextx = () => {
    console.log(12312);
  };

  const todoList = ssrData?.todos ?? [];

  return (
    <>
      <TodoList todoList={todoList} numOffset={(startPage - 1) * 10} />
      <div>
        <Button onClick={nextx}>next</Button>
      </div>
    </>
  );
}
