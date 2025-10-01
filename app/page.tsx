'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Capabilities from './blocks/capabilities'
import NAICS from './blocks/naics'
import TechnicalCapabilities from './blocks/technical-capabilities'
import WorkTogether from './blocks/work-together'
import Footer from './blocks/footer'
import ServicesOverview from './blocks/services-overview'
import Team from './blocks/team'
import TrainingAndCerts from './blocks/training-and-certs'
import Hero from './blocks/hero'
import Header from './blocks/header'

export default function HomePage() {
	const { resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Get the appropriate image based on theme
	const getBackgroundImage = () => {
		if (!mounted) return '/images/landing-page-light-background-image.png'
		return resolvedTheme === 'dark'
			? '/images/landing-page-dark-background-image.png'
			: '/images/landing-page-light-background-image.png'
	}

	const getLogoImage = () => {
		if (!mounted) return '/images/landing-page-light-background-image.png'
		return resolvedTheme === 'dark'
			? '/images/landing-page-dark-background-image.png'
			: '/images/landing-page-light-background-image.png'
	}

	return (
		<div className="min-h-screen bg-background">
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
				.hero-heading-light {
					text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18), 0 1px 0 #fff;
				}
				.hero-subheading-light {
					text-shadow: 0 1px 8px rgba(0, 0, 0, 0.12), 0 1px 0 #fff;
				}
			`}</style>

			<Header getLogoImage={getLogoImage} />

			<Hero
				getBackgroundImage={getBackgroundImage}
				mounted={mounted}
				resolvedTheme={resolvedTheme || 'light'}
			/>

			{/* Divider */}
			<div className="border-t border-gray-200 dark:border-gray-800" />

			<NAICS />
			<TechnicalCapabilities />
			<TrainingAndCerts />
			<Capabilities />
			<Team />
			<ServicesOverview />
			<WorkTogether />
			<Footer />
		</div>
	)
}
