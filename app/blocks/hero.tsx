import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

type HeroProps = {
	getBackgroundImage: () => string
	mounted: boolean
	resolvedTheme: string
}

export default function Hero(props: HeroProps) {
	const { getBackgroundImage, mounted, resolvedTheme } = props

	return (
		<section className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-screen">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-no-repeat bg-center transition-all duration-500 ease-in-out"
				style={{
					backgroundImage: `url(${getBackgroundImage()})`,
					backgroundSize: 'cover',
				}}
			/>
			{/* Theme-aware overlay for better text readability */}
			<div
				className="absolute inset-0"
				style={{
					background:
						mounted && resolvedTheme === 'light'
							? 'rgba(255,255,255,0.78)'
							: 'rgba(0,0,0,0.70)',
				}}
			/>

			<div className="container px-4 mx-auto relative z-10">
				<div className="mx-auto max-w-4xl text-center">
					<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 shadow-lg">
						Trusted Government Contractor
					</Badge>
					<h1
						className={`mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl drop-shadow-lg ${
							mounted && resolvedTheme === 'light' ? 'hero-heading-light' : ''
						}`}
					>
						Winning Government Contracts in{' '}
						<span className="text-blue-600 dark:text-blue-300 drop-shadow-lg">
							Technology & R&D
						</span>
					</h1>
					<p
						className={`mb-8 text-xl text-gray-700 dark:text-gray-100 sm:text-2xl drop-shadow-lg font-medium ${
							mounted && resolvedTheme === 'light'
								? 'hero-subheading-light'
								: ''
						}`}
					>
						Specialized expertise in 5 key NAICS codes. From custom programming
						to research & development, we deliver mission-critical solutions for
						federal agencies.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 shadow-lg"
						>
							View Our Capabilities
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-white/90 hover:bg-white text-gray-900 border-gray-300 dark:bg-background/90 dark:hover:bg-background dark:text-foreground dark:border-foreground shadow-lg"
						>
							Download Past Performance
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
