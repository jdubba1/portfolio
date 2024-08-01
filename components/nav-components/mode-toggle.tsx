'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch onCheckedChange={handleThemeChange} />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}
