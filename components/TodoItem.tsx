import { Todo } from '@/types/todo'
import { Checkbox, ListItem, ListItemButton, ListItemText } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Link from 'next/link'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, title, completed } = todo

  return (
    <ListItem
      sx={{
        bgcolor: `${completed ? 'rgba(52, 216, 126, 0.5)' : '#9e754783'}`,
        transition: 'all 0.3s ease',
        borderRadius: '10px',
        padding: '10px 20px',
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
          background: 'rgba(255,255,255,0.1)',
        },
      }}
    >
      <Checkbox checked={completed} />
      <ListItemText>{title}</ListItemText>

      <Link href={`/todos/${id}`}>
        <ReadMoreIcon
          sx={{
            color: 'white',
            verticalAlign: 'middle',
            margin: '0 8px',
            padding: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'rgba(255, 255, 255, 0.705)',
            },
          }}
        />
      </Link>

      <ListItemButton sx={{ flexGrow: 0 }}>
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}
