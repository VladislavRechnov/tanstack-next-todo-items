'use client'

import TodoList from '@/components/TodoList'
import { getAllTodos } from '@/lib/api'

export default function Home() {
  return <TodoList todosKey={['todos']} todosQueryFunction={getAllTodos} />
}
