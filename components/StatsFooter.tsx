'use client'

import { getAllTodos } from '@/lib/api'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export default function StatsFooter() {
  const queryTodos = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })

  const { data: todos, isSuccess, isPending, isError, error } = queryTodos

  return (
    <footer>
      <Typography className="py-4">
        {isError && `${error.message}`}
        {isPending && 'Loading...'}
        {isSuccess && `${todos.length} items left`}
      </Typography>
    </footer>
  )
}
