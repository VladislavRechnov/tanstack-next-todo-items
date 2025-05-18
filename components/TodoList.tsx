import { getTodos } from '@/lib/api'
import { List } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import TodoItem from './TodoItem'

export default function TodoList() {
  const queryTodos = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const { data: todos, isLoading, isError } = queryTodos

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error!</div>}
      {!isLoading && !isError && (
        <List
          sx={{
            display: 'grid',
            boxSizing: 'border-box',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            borderRadius: 1,
            padding: '20px 0',
          }}
        >
          {todos?.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />
          })}
        </List>
      )}
    </>
  )
}
