'use client'

import { getTodoById } from '@/lib/api'
import { Todo } from '@/types/todo'
import { Button } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const { id } = useParams()
  const todoId: Todo['id'] = Number(id)
  const router = useRouter()

  const queryTodo = useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => getTodoById(todoId),
  })

  return (
    <>
      {queryTodo.data?.title} {queryTodo.data?.id}
      <div>
        <Button onClick={() => router.back()}>back</Button>
      </div>
    </>
  )
}
