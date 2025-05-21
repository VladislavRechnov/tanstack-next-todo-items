import { Todo } from '@/types/todo'
const API_URL = 'https://jsonplaceholder.typicode.com'
export const TODOS_KEY = ['todos'] as const

export const API_TODOS_URL = {
  allTodos: `${API_URL}/todos`,
} as const

export async function getAllTodos(): Promise<Todo[]> {
  const response = await fetch(API_TODOS_URL.allTodos)
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

export async function updateTodoTitle(
  todoId: Todo['id'],
  newTitle: Todo['title']
) {
  await fetch(`${API_TODOS_URL.allTodos}/${todoId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: newTitle,
    }),
  })
}

export async function deleteTodoItem(todoId: Todo['id']) {
  await fetch(`${API_TODOS_URL.allTodos}/${todoId}`, {
    method: 'DELETE',
  })
}

export async function createTodoItem(newTodo: Todo) {
  await fetch(`${API_TODOS_URL.allTodos}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newTodo,
    }),
  })
}
