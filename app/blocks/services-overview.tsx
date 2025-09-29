import { CheckCircle } from 'lucide-react'
import React from 'react'

export default function ServicesOverview() {
	return (
		<section id="services" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
						<div>
							<h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
								Comprehensive Technology Solutions
							</h2>
							<p className="text-lg text-muted-foreground mb-8">
								From initial concept to full deployment, we provide end-to-end
								technology solutions that meet the unique requirements of
								government agencies.
							</p>

							<div className="space-y-4">
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
									<div>
										<h4 className="font-semibold text-foreground">
											Custom Software Development
										</h4>
										<p className="text-muted-foreground">
											Tailored applications built to government specifications
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
									<div>
										<h4 className="font-semibold text-foreground">
											System Integration
										</h4>
										<p className="text-muted-foreground">
											Seamless integration with existing government systems
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
									<div>
										<h4 className="font-semibold text-foreground">
											Cloud Infrastructure
										</h4>
										<p className="text-muted-foreground">
											Secure, scalable cloud solutions with FedRAMP compliance
										</p>
									</div>
								</div>
								<div className="flex items-start space-x-3">
									<CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
									<div>
										<h4 className="font-semibold text-foreground">
											Research & Development
										</h4>
										<p className="text-muted-foreground">
											Cutting-edge R&D in physical and engineering sciences
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 p-8">
								<div className="h-full w-full rounded-xl bg-background/80 backdrop-blur-sm p-6 flex items-center justify-center">
									<div className="text-center">
										<div className="text-4xl font-bold text-blue-600 mb-2">
											200+
										</div>
										<div className="text-muted-foreground mb-4">
											Successful Contracts
										</div>
										<div className="text-2xl font-bold text-green-600 mb-2">
											$50M+
										</div>
										<div className="text-muted-foreground">
											Contract Value Delivered
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
