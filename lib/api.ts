import { Todo } from '@/types/todo'
import { TodosKey } from '@/types/todosKey'
const API_URL = 'https://jsonplaceholder.typicode.com'
export const TODOS_KEY: TodosKey = ['todos']

export const API_TODOS_URL = {
  allTodos: `${API_URL}/todos`,
  activeTodos: `${API_URL}/todos?completed=false`,
  completedTodos: `${API_URL}/todos?completed=true`,
} as const

export async function getAllTodos(): Promise<Todo[]> {
  const response = await fetch(API_TODOS_URL.allTodos)
  return await response.json()
}

export async function getTodoById(todoId: Todo['id']): Promise<Todo> {
  const response = await fetch(`${API_TODOS_URL.allTodos}/${todoId}`)
  return await response.json()
}

export async function updateTodoStatus(
  todoId: Todo['id'],
  newStatus: Todo['completed']
) {
  await fetch(`${API_TODOS_URL.allTodos}/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: newStatus,
    }),
  })
}

export async function deleteTodoItem(todoId: Todo['id']) {
  await fetch(`${API_TODOS_URL.allTodos}/${todoId}`, {
    method: 'DELETE',
  })
}
