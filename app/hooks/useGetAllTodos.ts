import { getAllTodos, TODOS_KEY } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

export function useGetAllTodos() {
  const {
    data: todos,
    isPending,
    isSuccess,
    error,
  } = useQuery({
    queryKey: TODOS_KEY,
    queryFn: getAllTodos,
  })

  return { todos, isPending, isSuccess, error }
}
