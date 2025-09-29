import React from 'react'

import { Award, FileText, Shield, Users } from 'lucide-react'

const capabilities = [
	{
		icon: Shield,
		title: 'Security Clearance Ready',
		description:
			'Our team maintains active security clearances for classified projects',
	},
	{
		icon: Award,
		title: 'Proven Track Record',
		description:
			'Successfully delivered 200+ government contracts across federal agencies',
	},
	{
		icon: FileText,
		title: 'Compliance Expertise',
		description:
			'Deep knowledge of FAR, DFARS, and agency-specific requirements',
	},
	{
		icon: Users,
		title: 'Experienced Team',
		description: 'Former government employees who understand agency needs',
	},
]

export default function Capabilities() {
	return (
		<section id="capabilities" className="py-20 bg-muted/50">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-2xl text-center mb-16">
					<h2 className="text-3xl font-bold text-foreground sm:text-4xl">
						Why Government Agencies Choose Us
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Our unique combination of technical expertise and government
						experience
					</p>
				</div>

				<div className="mx-auto max-w-6xl">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{capabilities.map((capability, index) => (
							<div key={index} className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
									<capability.icon className="h-8 w-8 text-blue-600" />
								</div>
								<h3 className="mb-2 text-xl font-semibold text-foreground">
									{capability.title}
								</h3>
								<p className="text-muted-foreground">
									{capability.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
