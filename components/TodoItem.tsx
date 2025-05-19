import { Todo } from '@/types/todo'
import { Checkbox, ListItem, ListItemButton, ListItemText } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Link from 'next/link'
import { Typography } from '@material-tailwind/react'

interface TodoItemProps {
  todo: Todo
  todoIndex: number
}

export default function TodoItem({ todo, todoIndex }: TodoItemProps) {
  const { id, title, completed } = todo

  return (
    <ListItem
      className={`flex items-center justify-between rounded-xl p-2 shadow-md ${completed ? 'bg-sky-500/20' : 'bg-amber-900/10'}`}
    >
      <Typography className="mx-2.5">{todoIndex + 1}</Typography>
      <Checkbox checked={completed} />
      <ListItemText>{title}</ListItemText>

      <ListItemButton className="mx-2 grow-0 p-2">
        <Link href={`/todos/${id}`}>
          <ReadMoreIcon className="text-amber-5 mx-2 my-0 align-middle" />
        </Link>
      </ListItemButton>

      <ListItemButton className="grow-0 p-2">
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}
