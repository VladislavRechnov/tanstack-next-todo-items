'use client'

import TodoList from '@/components/TodoList'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 750 }}>
        <TodoList />
      </Box>
    </>
  )
}
