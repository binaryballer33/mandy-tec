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
import Image from 'next/image'

const naicsCodes = [
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description: 'Tailored Software Solutions For Government Agencies',
	},
	{
		code: '611420',
		title: 'Computer Software Training',
		description: 'Workforce Development Through IT Certifications Training',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description: 'Enterprise-Grade System Architecture And Design',
	},
	{
		code: '513210',
		title: 'Software Publishers',
		description:
			'Producing and Distributing Software, Including Design, Documentation, Installation, and Support.',
	},
	{
		code: '541519',
		title: 'Other Computer Related Services',
		description: 'Comprehensive IT Consulting And Support Services',
	},
	{
		code: '518210',
		title: 'Computing Infrastructure Providers',
		description: 'Data Processing, Web Hosting, And Cloud Services',
	},
]

export default function NAICS() {
	return (
		<section id="naics" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-3xl font-bold text-foreground sm:text-4xl">
						NAICS Code Specializations
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						We Excel In These Specific Areas
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

					<div className="flex justify-center mt-12">
						<Image
							src="/images/SDVOSB.png"
							alt="SDVOSB"
							width={400}
							height={400}
							className="object-contain rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
