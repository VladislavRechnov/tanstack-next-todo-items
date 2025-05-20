import TodoList from '@/components/TodoList'
import { API_TODOS_URL, getCompletedTodos } from '@/lib/api'

export default async function Page() {
  const initialCompltetdTodos = await getCompletedTodos()

  return (
    <TodoList
      todosKey={['todos', 'completed']}
      todosApiUrl={API_TODOS_URL.completedTodos}
      initialTodos={initialCompltetdTodos}
    />
  )
}
