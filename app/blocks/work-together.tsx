import { Button } from '@/components/ui/button'
import React from 'react'

export default function WorkTogether() {
	return (
		<section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
						If You Would Like To Work Together
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Let's Discuss How Our Expertise in These NAICS Codes Can Help Your
						Agency Achieve Its Mission-Critical Objectives.
					</p>
					<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
						<Button size="lg" variant="secondary">
							Schedule Consultation
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
						>
							Request Capabilities Statement
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
