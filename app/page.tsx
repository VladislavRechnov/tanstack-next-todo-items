import TodoList from '@/components/TodoList'
import { getAllTodos } from '@/lib/api'

export default async function Home() {
  const initialTodos = await getAllTodos()

  return <TodoList initialTodos={initialTodos} />
}
