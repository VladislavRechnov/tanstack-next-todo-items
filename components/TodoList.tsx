import { getTodos } from '@/lib/api'
import { List } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import TodoItem from './TodoItem'

export default function TodoList() {
  const queryTodos = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const todos = queryTodos.data

  return (
    <List>
      {todos?.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </List>
  )
}
