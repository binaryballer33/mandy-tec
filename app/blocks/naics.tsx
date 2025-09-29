import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import React from 'react'

const naicsCodes = [
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description: 'Tailored software solutions for government agencies',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description: 'Enterprise-grade system architecture and design',
	},
	{
		code: '541519',
		title: 'Other Computer Related Services',
		description: 'Comprehensive IT consulting and support services',
	},
	{
		code: '518210',
		title: 'Computing Infrastructure Providers',
		description: 'Data processing, web hosting, and cloud services',
	},
	{
		code: '541715',
		title: 'Research and Development',
		description: 'Physical, engineering, and life sciences R&D',
	},
]

export default function NAICS() {
	return (
		<section id="naics" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-3xl font-bold text-foreground sm:text-4xl">
						Our NAICS Code Specializations
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						We excel in these specific areas, with proven success in winning and
						executing contracts
					</p>
				</div>

				<div className="mx-auto max-w-6xl">
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{naicsCodes.map((naics, index) => (
							<Card
								key={naics.code}
								className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-colors bg-gray-50 dark:bg-gray-900/50"
							>
								<CardHeader>
									<div className="flex items-center justify-between">
										<Badge variant="secondary" className="text-sm font-mono">
											{naics.code}
										</Badge>
										<CheckCircle className="h-5 w-5 text-green-500" />
									</div>
									<CardTitle className="text-lg">{naics.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base">
										{naics.description}
									</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
