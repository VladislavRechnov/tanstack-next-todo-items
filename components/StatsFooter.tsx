'use client'

import { useGetAllTodos } from '@/app/hooks/useGetAllTodos'
import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function StatsFooter() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { todos, isPending, isSuccess, error } = useGetAllTodos()

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
        {error && `${error.message}`}
        {isPending && 'Loading...'}
        {isSuccess && (
          <Typography>
            {todos?.length} items left.
            <br />
            {activeItemsCount} active items left.
            <br />
            {completedItemsCount} completed items left.
          </Typography>
        )}
      </Box>
    </footer>
  )
}
