import React from 'react'

import { CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Leadership() {
	return (
		<section id="leadership" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
							Leadership You Can Trust
						</h2>
						<p className="text-lg text-muted-foreground">
							Meet Shaquille Mandy, CEO & Founder - A proven technology leader
							with extensive government and enterprise experience
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
						<div>
							<div className="mb-8">
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Shaquille Mandy
								</h3>
								<p className="text-xl text-blue-600 font-semibold mb-4">
									CEO & Founder, MANDYTEC
								</p>
								<p className="text-lg text-muted-foreground mb-6">
									Fullstack Software Engineer with extensive experience in
									government contracting, cybersecurity, and enterprise-scale
									technology solutions. Former Amazon engineer with Top-Secret
									SCI clearance and deep expertise in AWS cloud infrastructure.
								</p>
							</div>

							<div className="space-y-6">
								<div>
									<h4 className="font-semibold text-foreground mb-3">
										Key Qualifications
									</h4>
									<div className="grid grid-cols-2 gap-3">
										<div className="flex items-center space-x-2">
											<CheckCircle className="h-4 w-4 text-green-500" />
											<span className="text-sm text-muted-foreground">
												Top-Secret SCI Clearance
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<CheckCircle className="h-4 w-4 text-green-500" />
											<span className="text-sm text-muted-foreground">
												CISSP Certified
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<CheckCircle className="h-4 w-4 text-green-500" />
											<span className="text-sm text-muted-foreground">
												AWS Solutions Architect
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<CheckCircle className="h-4 w-4 text-green-500" />
											<span className="text-sm text-muted-foreground">
												M.S. Cybersecurity
											</span>
										</div>
									</div>
								</div>

								<div>
									<h4 className="font-semibold text-foreground mb-3">
										Contact Information
									</h4>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>📧 shaqmandy@gmail.com</p>
										<p>📱 +1 813-816-8615</p>
										<p>🌐 www.shaquillemandy.com</p>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<Card className="border-2 bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<CardTitle className="text-lg">
										Professional Experience
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="border-l-4 border-blue-500 pl-4">
										<h5 className="font-semibold text-foreground">
											Software Engineer - Amazon
										</h5>
										<p className="text-sm text-muted-foreground mb-2">
											May 2022 - Dec 2023
										</p>
										<p className="text-sm text-muted-foreground">
											Alexa Smart Home organization, full-stack development with
											React Native, TypeScript, Java, AWS. Supported global
											energy consumption reduction initiatives.
										</p>
									</div>

									<div className="border-l-4 border-green-500 pl-4">
										<h5 className="font-semibold text-foreground">
											Site Reliability Engineer - Amazon
										</h5>
										<p className="text-sm text-muted-foreground mb-2">
											Oct 2021 - May 2022
										</p>
										<p className="text-sm text-muted-foreground">
											AWS BuilderTools organization, managed 20+ deployment
											pipelines, on-call rotation supporting critical AWS
											services.
										</p>
									</div>

									<div className="border-l-4 border-orange-500 pl-4">
										<h5 className="font-semibold text-foreground">
											Network Administrator - US Military
										</h5>
										<p className="text-sm text-muted-foreground mb-2">
											Aug 2017 - June 2021
										</p>
										<p className="text-sm text-muted-foreground">
											Maintained critical infrastructure for 10,000+ military
											and civilian workforce up to Top-Secret SCI level.
										</p>
									</div>
								</CardContent>
							</Card>

							<Card className="border-2 bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<CardTitle className="text-lg">
										Certifications & Education
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-2 gap-4 text-sm">
										<div>
											<h6 className="font-semibold text-foreground mb-2">
												Security
											</h6>
											<ul className="space-y-1 text-muted-foreground">
												<li>• CISSP</li>
												<li>• CASP+</li>
												<li>• Pentest+</li>
												<li>• CySA+</li>
												<li>• CEH</li>
											</ul>
										</div>
										<div>
											<h6 className="font-semibold text-foreground mb-2">
												Infrastructure
											</h6>
											<ul className="space-y-1 text-muted-foreground">
												<li>• AWS Solutions Architect</li>
												<li>• Linux+</li>
												<li>• CCNA</li>
												<li>• ITIL</li>
												<li>• Project+</li>
											</ul>
										</div>
									</div>
									<div className="mt-4 pt-4 border-t">
										<h6 className="font-semibold text-foreground mb-2">
											Education
										</h6>
										<p className="text-sm text-muted-foreground">
											M.S. Cybersecurity & IA - Western Governors University
										</p>
										<p className="text-sm text-muted-foreground">
											B.S. Information Technology - Western Governors University
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
