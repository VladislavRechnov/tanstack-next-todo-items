'use client'

import { Tab, Tabs } from '@mui/material'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FilterTabs() {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTabSegment = pathname.split('/')[1] || ''
  const validTabs = ['', 'active', 'completed']
  const currentTab = validTabs.includes(currentTabSegment)
    ? currentTabSegment
    : false

  if (currentTab === false) return null

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: '' | 'active' | 'completed'
  ) => {
    router.push(`/${newValue}`)
  }

  return (
    <Tabs className="max-h-12" value={currentTab} onChange={handleChange}>
      <Tab label="All Todos" value="" />
      <Tab label="Active Todos" value="active" />
      <Tab label="Completed Todos" value="completed" />
    </Tabs>
  )
}
