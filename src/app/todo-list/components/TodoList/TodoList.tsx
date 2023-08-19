import styles from './TodoList.module.scss';
import { TodoCard } from '~/app/todo-list/components/TodoCard';
import { Todo } from '~/app/todo-list/types';

interface TodoListProps {
  todoList: Todo[];
  numOffset: number;
}
export function TodoList({ todoList, numOffset }: TodoListProps) {
  return (
    <div className={styles.TodoList}>
      {todoList.map((todo, index) => (
        <TodoCard key={todo.id} todo={todo} num={numOffset + index + 1} />
      ))}
    </div>
  );
}
