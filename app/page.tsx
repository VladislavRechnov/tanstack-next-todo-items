'use client'

import TodoList from '@/components/TodoList'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box className="custom-scrollbar max-h-[80vh] overflow-auto pr-2.5">
        <TodoList />
      </Box>
    </>
  )
}
