'use client'

import { Todo } from '@/types/todo'
import { Checkbox, ListItem, ListItemButton, ListItemText } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import ReadMoreIcon from '@mui/icons-material/ReadMore'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTodoItem, TODOS_KEY, updateTodoStatus } from '@/lib/api'
import dayjs from 'dayjs'

interface TodoItemProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, title, completed, userId, createdAt } = todo
  const queryClient = useQueryClient()

  const todoCompleteMutation = useMutation({
    mutationFn: () => updateTodoStatus(id, !completed),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: TODOS_KEY })

      const previousTodos: Todo[] = queryClient.getQueryData(TODOS_KEY) ?? []

      const optimisticTodos = previousTodos.map((todo) => {
        const updatedTodo: Todo = {
          userId: userId,
          id,
          title,
          completed: !completed,
          createdAt,
          updatedAt: dayjs().format(),
        }

        return todo.id === id ? updatedTodo : todo
      })

      queryClient.setQueryData(TODOS_KEY, optimisticTodos)

      return { previousTodos }
    },
    onError: (err, variables, context) => {
      if (context) {
        queryClient.setQueryData(TODOS_KEY, context.previousTodos)
      }
    },
    onSuccess: async (data: { todos: Todo[] } | void) => {
      await queryClient.setQueryData(TODOS_KEY, data?.todos)
    },
    onSettled: () => console.log('Complete status updated'),
  })

  const todoDeleteMutation = useMutation({
    mutationFn: () => deleteTodoItem(id),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: TODOS_KEY })

      const previousTodos: Todo[] = queryClient.getQueryData(TODOS_KEY) ?? []

      const optimisticTodos = previousTodos.filter((todo) => {
        return todo.id !== id
      })

      queryClient.setQueryData(TODOS_KEY, optimisticTodos)

      return { previousTodos }
    },
    onError: (err, variables, context) => {
      if (context) {
        queryClient.setQueryData(TODOS_KEY, context.previousTodos)
      }
    },
    onSuccess: async (data: { todos: Todo[] } | void) => {
      await queryClient.setQueryData(TODOS_KEY, data?.todos)
    },
    onSettled: () => console.log('Todo item deleted'),
  })

  function changeTodoCompletedStatusHandler() {
    todoCompleteMutation.mutate()
  }

  function deleteTodoItemHandler() {
    todoDeleteMutation.mutate()
  }

  return (
    <ListItem
      className={`flex items-center justify-between rounded-xl p-2 shadow-md ${completed ? 'bg-sky-500/20' : 'bg-amber-900/10'}`}
    >
      <Checkbox
        checked={completed}
        onClick={changeTodoCompletedStatusHandler}
      />
      <ListItemText>{title}</ListItemText>

      <ListItemButton className="mx-2 grow-0 p-2">
        <Link href={`/todos/${id}`}>
          <ReadMoreIcon className="text-amber-5 mx-2 my-0 align-middle" />
        </Link>
      </ListItemButton>

      <ListItemButton className="grow-0 p-2" onClick={deleteTodoItemHandler}>
        <ClearIcon />
      </ListItemButton>
    </ListItem>
  )
}
