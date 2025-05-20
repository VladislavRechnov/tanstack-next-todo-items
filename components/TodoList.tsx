'use client'

import { Alert, Box, CircularProgress, List } from '@mui/material'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface TodoListProps {
  todosKey: (string | number)[]
  todosApiUrl: string
  initialTodos: Todo[]
}

export default function TodoList({
  todosKey,
  todosApiUrl,
  initialTodos,
}: TodoListProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const queryTodos = useQuery({
    queryKey: todosKey,
    queryFn: async (): Promise<Todo[]> => {
      const responce = await fetch(todosApiUrl)
      return await responce.json()
    },
    initialData: initialTodos,
  })
  const { data: todos, isSuccess, isPending, isError, error } = queryTodos

  if (!mounted) return null

  return (
    <Box
      className={`custom-scrollbar max-h-[750px] min-h-[70vh] overflow-auto pr-2.5 ${(isPending || isError) && 'flex items-center justify-center'}`}
    >
      {isPending && <CircularProgress size="128px" />}
      {isError && <Alert severity="error">{error.message}</Alert>}
      {isSuccess && (
        <List className="grid grid-cols-1 gap-y-4 rounded-lg">
          {todos?.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} todoIndex={index} />
          })}
        </List>
      )}
    </Box>
  )
}
