import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { useActiveSection } from '@/hooks/use-active-section'

type HeaderProps = {
	getLogoImage: () => string
}

export default function Header(props: HeaderProps) {
	const { getLogoImage } = props

	const activeSection = useActiveSection()

	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="flex h-14 items-center max-w-7xl mx-auto">
				{/* Logo */}
				<div className="flex items-center space-x-2 px-4">
					<img
						src={getLogoImage()}
						alt="MANDYTEC Logo"
						className="h-8 w-8 rounded-full border-black border-2 transition-all duration-500 ease-in-out"
					/>
					<span className="text-xl font-bold text-foreground">MANDYTEC</span>
				</div>

				{/* Navigation - centered */}
				<nav className="hidden lg:flex items-center space-x-6 mx-auto">
					<Link
						href="#naics"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'naics'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						NAICS Codes
					</Link>
					<Link
						href="#technical-capabilities"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'technical-capabilities'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Technical Capabilities
					</Link>
					<Link
						href="#training"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'training'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Training
					</Link>
					<Link
						href="#capabilities"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'capabilities'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Why Choose Us
					</Link>
					<Link
						href="#leadership"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'leadership'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Leadership
					</Link>
					<Link
						href="#services"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'services'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Services
					</Link>
					<Link
						href="#contact"
						className={`text-sm font-medium transition-colors relative pb-1 ${
							activeSection === 'contact'
								? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						Contact
					</Link>
				</nav>

				<div className="flex items-center space-x-4 px-4">
					{/* Mobile menu button */}
					<div className="lg:hidden">
						<Button
							variant="ghost"
							size="sm"
							className="text-foreground hover:bg-muted"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</Button>
					</div>

					{/* Theme Toggle */}
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
