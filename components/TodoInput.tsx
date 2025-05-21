'use client'

import { createTodoItem, TODOS_KEY } from '@/lib/api'
import { Todo } from '@/types/todo'
import { TextField } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

export function TodoInput() {
  const [textFieldValue, setTextFieldValue] = useState('')
  const [mounted, setMounted] = useState(false)
  const queryClient = useQueryClient()

  const todoAddNewItemMutation = useMutation({
    mutationFn: (newTodo: Todo) => createTodoItem(newTodo),
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: TODOS_KEY })

      const previousTodos: Todo[] = queryClient.getQueryData(TODOS_KEY) ?? []

      const optimisticTodos = [newTodo, ...previousTodos]

      queryClient.setQueryData(TODOS_KEY, optimisticTodos)

      return { previousTodos }
    },
    onError: (err, variables, context) => {
      if (context) {
        queryClient.setQueryData(TODOS_KEY, context.previousTodos)
      }
    },
    onSuccess: async (data: { todos: Todo[] } | void) => {
      queryClient.setQueryData(TODOS_KEY, data?.todos)
    },
    onSettled: () => console.log('Complete status updated'),
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  function textFieldChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value
    setTextFieldValue(newValue)
  }

  function textFieldKeyDownHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter' && textFieldValue) {
      todoAddNewItemMutation.mutate({
        userId: 1,
        id: parseInt(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
        title: textFieldValue.trim(),
        completed: false,
        createdAt: dayjs().format(),
      })

      setTextFieldValue('')
    }
  }

  return (
    <TextField
      id="outlined-basic"
      label="New todo"
      variant="outlined"
      className="mt-4"
      value={textFieldValue}
      onChange={textFieldChangeHandler}
      onKeyDown={textFieldKeyDownHandler}
      slotProps={{
        input: { className: 'text-amber-50' },
        inputLabel: { className: 'text-amber-50' },
      }}
    />
  )
}
