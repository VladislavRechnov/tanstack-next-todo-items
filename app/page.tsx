import TodoList from '@/components/TodoList'
import { API_TODOS_URL, getAllTodos } from '@/lib/api'

export default async function Home() {
  const initialTodos = await getAllTodos()

  return (
    <TodoList
      todosKey={['todos']}
      todosApiUrl={API_TODOS_URL.allTodos}
      initialTodos={initialTodos}
    />
  )
}
