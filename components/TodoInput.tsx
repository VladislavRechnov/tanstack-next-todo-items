import { TextField } from '@mui/material'

export function TodoInput() {
  return (
    <TextField
      id="outlined-basic"
      label="New todo"
      variant="outlined"
      slotProps={{
        input: { className: 'text-amber-50' },
        inputLabel: { className: 'text-amber-50' },
      }}
    />
  )
}
