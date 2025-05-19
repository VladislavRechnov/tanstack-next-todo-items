'use client'

import TodoList from '@/components/TodoList'
import { getActiveTodos } from '@/lib/api'

export default function Page() {
  return (
    <TodoList
      todosKey={['todos', 'active']}
      todosQueryFunction={getActiveTodos}
    />
  )
}
