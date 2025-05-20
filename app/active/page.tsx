import TodoList from '@/components/TodoList'
import { API_TODOS_URL, getActiveTodos } from '@/lib/api'

export default async function Page() {
  const initialActiveTodos = await getActiveTodos()

  return (
    <TodoList
      todosKey={['todos', 'active']}
      todosApiUrl={API_TODOS_URL.activeTodos}
      initialTodos={initialActiveTodos}
    />
  )
}
