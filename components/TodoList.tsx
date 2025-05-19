'use client'

import { Alert, Box, CircularProgress, List } from '@mui/material'
import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'
import { useQuery } from '@tanstack/react-query'

interface TodoListProps {
  todosKey: (string | number)[]
  todosQueryFunction: () => Promise<Todo[]>
}

export default function TodoList({
  todosKey,
  todosQueryFunction,
}: TodoListProps) {
  const queryTodos = useQuery({
    queryKey: todosKey,
    queryFn: todosQueryFunction,
  })
  const { data: todos, isSuccess, isLoading, isError, error } = queryTodos

  return (
    <Box
      className={`custom-scrollbar h-[80vh] overflow-auto pr-2.5 ${(isLoading || isError) && 'flex items-center justify-center'}`}
    >
      {isLoading && <CircularProgress size="128px" />}
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
