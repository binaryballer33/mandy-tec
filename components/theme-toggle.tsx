'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
	const { theme, setTheme, resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button
				variant="ghost"
				size="sm"
				className="h-9 w-9 px-0 text-foreground hover:bg-muted hover:text-foreground"
			>
				<Sun className="h-[1.2rem] w-[1.2rem]" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		)
	}

	const isDark = resolvedTheme === 'dark'

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={() => {
				console.log('Current theme:', theme, 'Resolved:', resolvedTheme)
				setTheme(isDark ? 'light' : 'dark')
			}}
			className="h-9 w-9 px-0 text-foreground hover:bg-muted hover:text-foreground"
		>
			{isDark ? (
				<Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
			) : (
				<Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
