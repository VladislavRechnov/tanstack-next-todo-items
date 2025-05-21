'use client'

import { Alert, Box, CircularProgress, List } from '@mui/material'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { API_TODOS_URL } from '@/lib/api'

interface TodoListProps {
  initialTodos: Todo[]
}

export default function TodoList({ initialTodos }: TodoListProps) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const {
    data: todos,
    isSuccess,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const responce = await fetch(API_TODOS_URL.allTodos)
      return await responce.json()
    },
    initialData: initialTodos,
    placeholderData: keepPreviousData,
  })

  const filteredTodos = useMemo(() => {
    if (!todos) return []

    switch (pathname) {
      case '/active':
        return todos.filter((todo) => !todo.completed)
      case '/completed':
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }, [todos, pathname])

  if (!mounted) return null

  return (
    <Box
      className={`custom-scrollbar max-h-[700px] min-h-[70vh] overflow-auto pr-2.5 ${(isPending || isError) && 'flex items-center justify-center'}`}
    >
      {isPending && <CircularProgress size="128px" />}
      {isError && <Alert severity="error">{error.message}</Alert>}
      {isSuccess && (
        <List className="grid grid-cols-1 gap-y-4 rounded-lg">
          {filteredTodos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />
          })}
        </List>
      )}
    </Box>
  )
}
