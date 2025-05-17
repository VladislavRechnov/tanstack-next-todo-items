import { Todo } from '@/types/todo'

const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getTodos() {
  const responce = await fetch(`${API_URL}/todos`)
  const todos: Todo[] = await responce.json()
  return todos
}
