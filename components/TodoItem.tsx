import { Todo } from '@/types/todo'
import { Checkbox, ListItem, ListItemButton, ListItemText } from '@mui/material'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, title, completed } = todo

  return (
    <ListItem disablePadding>
      <Checkbox />
      <ListItemText>
        {title}. Completed: {completed ? 'True' : 'False'}
      </ListItemText>

      <ListItemButton href={`/todos/${id}`}>look on item</ListItemButton>
    </ListItem>
  )
}
