import { Todo } from '@/types/todo'
const API_URL = 'https://jsonplaceholder.typicode.com'

export const API_TODOS_URL = {
  allTodos: `${API_URL}/todos`,
  activeTodos: `${API_URL}/todos?completed=false`,
  completedTodos: `${API_URL}/todos?completed=true`,
} as const

export async function getAllTodos(): Promise<Todo[]> {
  const response = await fetch(API_TODOS_URL.allTodos)
  return await response.json()
}

export async function getActiveTodos(): Promise<Todo[]> {
  const response = await fetch(API_TODOS_URL.activeTodos)
  return await response.json()
}

export async function getCompletedTodos(): Promise<Todo[]> {
  const response = await fetch(API_TODOS_URL.completedTodos)
  return await response.json()
}

export async function getTodoById(id: Todo['id']): Promise<Todo> {
  const response = await fetch(`${API_TODOS_URL.allTodos}/${id}`)
  return await response.json()
}
