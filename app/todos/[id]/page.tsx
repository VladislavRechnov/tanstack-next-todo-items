'use client'

import { getAllTodos, TODOS_KEY } from '@/lib/api'
import { Todo } from '@/types/todo'
import { Button, Card, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const { id } = useParams()
  const todoId: Todo['id'] = Number(id)
  const router = useRouter()

  const {
    data: todos,
    isPending,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: TODOS_KEY,
    queryFn: getAllTodos,
  })

  const todo: Todo | undefined = todos?.find((todo) => todo.id === todoId)

  if (todo === undefined) {
    return (
      <Card
        variant="outlined"
        className="max-h-[750px] min-h-[70vh] bg-sky-500/20 p-4 text-amber-50 shadow-2xl"
      >
        <Typography variant="h2" className="mb-4 text-4xl">
          Todo Not Found
        </Typography>

        <Button variant="contained" onClick={() => router.back()}>
          back
        </Button>
      </Card>
    )
  }

  return (
    <Card
      variant="outlined"
      className="max-h-[750px] min-h-[70vh] bg-sky-500/20 p-4 text-amber-50 shadow-2xl"
    >
      <Typography variant="h2" className="mb-4 text-4xl">
        Task info:
      </Typography>
      {isPending && (
        <Typography variant="h3" className="mb-4 text-4xl">
          Loading... 12
        </Typography>
      )}
      {isError && (
        <Typography className="mb-4 text-4xl">{error.message}</Typography>
      )}
      {isSuccess && (
        <Typography className="mb-4 text-2xl leading-relaxed">
          ID: {todo.id}
          <br />
          Title: {todo.title}
          <br />
          Completed: {String(todo.completed)}
        </Typography>
      )}

      <Button variant="contained" onClick={() => router.back()}>
        back
      </Button>
    </Card>
  )
}
