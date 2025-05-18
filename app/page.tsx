'use client'

import TodoList from '@/components/TodoList'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxHeight: '80vh',
          overflow: 'auto',
        }}
      >
        <TodoList />
      </Box>
    </>
  )
}
