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
      className={`flex items-center justify-between rounded-xl px-2.5 py-5 text-amber-50 shadow-md ${completed ? 'bg-emerald-600' : 'bg-amber-900'}`}
    >
      <Checkbox checked={completed} />
      <ListItemText>{title}</ListItemText>

      <Link className="text-base" href={`/todos/${id}`}>
        <ReadMoreIcon className="mx-2 my-0 align-middle text-amber-50 transition-colors duration-300 ease-in hover:text-blue-500" />
      </Link>

      <ListItemButton className="grow-0">
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}
