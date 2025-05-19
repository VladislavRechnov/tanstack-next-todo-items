'use client'

import TodoList from '@/components/TodoList'
import { getCompletedTodos } from '@/lib/api'

export default function Page() {
  return (
    <TodoList
      todosKey={['todos', 'completed']}
      todosQueryFunction={getCompletedTodos}
    />
  )
}
