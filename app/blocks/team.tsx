import React from 'react'

import { CheckCircle } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

export default function Team() {
	return (
		<section id="leadership" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
							Leadership With Technical Expertise You Can Trust
						</h2>
						<p className="text-lg text-muted-foreground">
							Meet Shaquille Mandy, CEO & Founder - A Proven Technology Leader
							With Extensive Government And Enterprise Experience
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
						<div>
							<div className="mb-8">
								<h3 className="text-2xl font-bold text-foreground mb-4">
									Shaquille Mandy
								</h3>
								<p className="text-xl text-blue-600 font-semibold mb-4">
									CEO & Founder, MANDYTEC
								</p>
								<p className="text-lg text-muted-foreground mb-6">
									Fullstack Software Engineer With Extensive Experience In
									Government Contracting, Cybersecurity, And Enterprise-Scale
									Technology Solutions. Former Amazon Engineer That Has Done
									Work At The Top-Secret SCI Clearance And Deep Expertise In AWS
									Cloud Infrastructure.
								</p>
							</div>

							<Image
								src="/images/suit-profile-pic.jpg"
								alt="Shaquille Mandy"
								className="w-full h-auto rounded-lg mt-8"
								width={500}
								height={500}
							/>

							<div className="mt-8 space-y-6">
								<div>
									<h4 className="font-semibold text-foreground mb-3">
										Contact Information
									</h4>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>📧 shaqmandy@mandy-tec.com</p>
										<p>📱 +1 813-816-8615</p>
										<p>
											<Link
												href="https://www.shaquillemandy.com"
												target="_blank"
											>
												🌐 Personal Website
											</Link>
										</p>
										<p>
											<Link
												href="https://www.linkedin.com/in/shaquille-mandy-525079111/"
												target="_blank"
												className="flex items-center gap-2"
											>
												<Linkedin className="h-4 w-4 text-blue-500" />
												LinkedIn
											</Link>
										</p>
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
											As A Key Contributor Within The Alexa Smart Home
											Organization, I Specialized In The Energy Consumption
											Component Of The Service. My Full-stack Expertise Spanned
											Both Front-end And Back-end Services For The Alexa Smart
											Home Mobile Application, Leveraging Technologies Such As
											React, React Native, TypeScript, Java, And AWS. My Work
											Directly Supported The Global Initiative To Reduce
											Electricity Consumption, Significantly Contributing To The
											Company's Efforts In Mitigating Global Warming Impact And
											Saving The Customer Money On Their Electric Bill.
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
											As An Engineer, I Was Responsible For Enhancing The
											Reliability And Efficiency Of Critical Software Delivery
											Pipelines. I Diagnosed And Resolved Deployment Failures
											Across Over 20 CI/CD Pipelines, Implementing Targeted Code
											Changes And Developing Automation Scripts To Eliminate
											Repetitive Manual Tasks. My Efforts Directly Contributed
											To Maintaining High Availability For Supported Services,
											Ensuring Minimal Downtime. I Actively Collaborated With
											Fellow Software Engineers And Participated In A 10-person
											On-call Rotation For The AWS BuilderTools Organization. My
											Technical Expertise Frequently Involved Services Such As
											CloudFormation, CodeDeploy, CodeCommit, CodeBuild,
											CodePipeline, RDS, DynamoDB, SWF, And SQS.
										</p>
									</div>

									<div className="border-l-4 border-purple-500 pl-4">
										<h5 className="font-semibold text-foreground">
											Cloud Support Engineer - Amazon Web Services
										</h5>
										<p className="text-sm text-muted-foreground mb-2">
											June 2021 - Oct 2021
										</p>
										<p className="text-sm text-muted-foreground">
											My Role Involved Providing Advanced Technical Support To
											AWS Customers, Utilizing Our Ticketing System To Diagnose
											And Resolve Complex Resource-related Issues. I Focused On
											Root Cause Analysis, Guiding Customers Through Effective
											Solutions And Enhancing Their Operational Proficiency
											Within The AWS Ecosystem. My Expertise Encompassed A Broad
											Range Of AWS Services, Including EC2, IAM, S3, VPC, KMS,
											CloudWatch, CloudTrail, And Route 53, Among Others.
										</p>
									</div>

									<div className="border-l-4 border-orange-500 pl-4">
										<h5 className="font-semibold text-foreground">
											Network Administrator - United States Air Force
										</h5>
										<p className="text-sm text-muted-foreground mb-2">
											Aug 2017 - June 2021
										</p>
										<p className="text-sm text-muted-foreground">
											My Responsibilities Included The Sustained Availability
											And Security Of Critical Network Infrastructure For A
											Workforce Exceeding 10,000 Military And Civilian
											Personnel, Up To The Top-Secret SCI Classification. I Was
											Instrumental In Ensuring Authorized Access While
											Meticulously Safeguarding The Integrity Of Our Systems. My
											Expertise Spans A Range Of Technologies, Including
											TACLANES, Cisco/Juniper Routing And Switching Platforms,
											VoIP Systems, Network Printers, Identity And Access
											Management (IAM) Solutions, And Various End-user And
											Server-side Hardware.
										</p>
									</div>
								</CardContent>
							</Card>

							<Card className="border-2 bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<CardTitle className="text-lg">Certifications Held</CardTitle>
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
