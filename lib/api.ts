import { Todo } from '@/types/todo'

const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getAllTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos`)
  return await response.json()
}

export async function getActiveTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos?completed=false`)
  return await response.json()
}

export async function getCompletedTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos?completed=true`)
  return await response.json()
}

export async function getTodoById(id: Todo['id']): Promise<Todo> {
  const response = await fetch(`${API_URL}/todos/${id}`)
  return await response.json()
}
