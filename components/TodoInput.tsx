'use client'

import { TextField } from '@mui/material'

export function TodoInput() {
  return (
    <TextField
      id="outlined-basic"
      label="New todo"
      variant="outlined"
      className="mt-4"
      slotProps={{
        input: { className: 'text-amber-50' },
        inputLabel: { className: 'text-amber-50' },
      }}
    />
  )
}
