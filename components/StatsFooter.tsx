'use client'

import { getAllTodos } from '@/lib/api'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export default function StatsFooter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const queryTodos = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })

  const { data: todos, isSuccess, isPending, isError, error } = queryTodos

  if (!mounted) return null

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
