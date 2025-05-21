'use client'

import { getAllTodos, TODOS_KEY } from '@/lib/api'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export default function StatsFooter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const queryTodos = useQuery({
    queryKey: TODOS_KEY,
    queryFn: getAllTodos,
  })

  const { data: todos, isSuccess, isPending, isError, error } = queryTodos
  const activeItemsCount = todos?.filter(
    (todo) => todo.completed === false
  ).length
  const completedItemsCount = todos?.filter(
    (todo) => todo.completed === true
  ).length

  if (!mounted) return null

  return (
    <footer>
      <Box className="py-4">
        {isError && `${error.message}`}
        {isPending && 'Loading...'}
        {isSuccess && (
          <Typography>
            {todos.length} items left.
            <br />
            {activeItemsCount} avtive items left.
            <br />
            {completedItemsCount} completed items left.
          </Typography>
        )}
      </Box>
    </footer>
  )
}
