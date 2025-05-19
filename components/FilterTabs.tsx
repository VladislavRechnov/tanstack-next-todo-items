'use client'

import { Tab, Tabs } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FilterTabs() {
  const [value, setValue] = useState<'' | 'active' | 'completed' | 'dead'>('')
  const router = useRouter()

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: '' | 'active' | 'completed'
  ) => {
    setValue(() => newValue)
    router.push(`/${newValue}`)
  }

  return (
    <Tabs
      className="mt-4 max-h-12"
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      <Tab label="All Todos" value="" />
      <Tab label="Active Todos" value="active" />
      <Tab label="Completed Todos" value="completed" />
    </Tabs>
  )
}
