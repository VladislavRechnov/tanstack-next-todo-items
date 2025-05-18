import { Todo } from '@/types/todo'

const API_URL = 'https://jsonplaceholder.typicode.com'

export async function getTodos() {
  const responce = await fetch(`${API_URL}/todos`)
  const todos: Todo[] = await responce.json()
  return todos
}

export async function getActiveTodos() {
  const todos = await getTodos()
  return todos.filter((todo) => todo.completed === false)
}

export async function getCompletedTodos() {
  const todos = await getTodos()
  return todos.filter((todo) => todo.completed === true)
}
