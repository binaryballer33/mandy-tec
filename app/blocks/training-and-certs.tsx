import React from 'react'
import { Badge } from '@/components/ui/badge'
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card'
import { GraduationCap, Shield } from 'lucide-react'
import { CheckCircle } from 'lucide-react'
import { Award } from 'lucide-react'
import { Users } from 'lucide-react'
import { Globe } from 'lucide-react'
import { Server } from 'lucide-react'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function TrainingAndCerts() {
	return (
		<section id="training" className="py-20 bg-background">
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200">
							Professional Development
						</Badge>
						<h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
							Enterprise Training & Certification Programs
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Comprehensive technical training programs designed to elevate your
							workforce's capabilities and ensure industry-leading
							certifications across all major technology platforms.
						</p>
					</div>

					{/* Training Overview Cards */}
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
						<Card className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-colors bg-gray-50 dark:bg-gray-900/50">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-green-500 rounded-lg">
										<GraduationCap className="h-6 w-6 text-white" />
									</div>
									<CardTitle className="text-xl">Corporate Training</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base mb-4">
									Customized training programs tailored to your organization's
									specific technology stack and business objectives.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>On-site and virtual delivery</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Curriculum customization</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Progress tracking & reporting</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-colors bg-gray-50 dark:bg-gray-900/50">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-blue-500 rounded-lg">
										<Award className="h-6 w-6 text-white" />
									</div>
									<CardTitle className="text-xl">
										Certification Bootcamps
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base mb-4">
									Intensive certification preparation programs with
									industry-leading pass rates and hands-on lab experiences.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>95%+ certification pass rate</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Hands-on lab environments</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Exam vouchers included</span>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-colors bg-gray-50 dark:bg-gray-900/50">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-purple-500 rounded-lg">
										<Users className="h-6 w-6 text-white" />
									</div>
									<CardTitle className="text-xl">Skills Development</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-base mb-4">
									Continuous learning programs focused on emerging technologies
									and advanced technical competencies.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Emerging technology focus</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Mentorship programs</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<span>Career pathway guidance</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Certification Partners */}
					<div className="mb-16">
						<h3 className="text-2xl font-bold text-foreground text-center mb-12">
							Authorized Training Partner Network
						</h3>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{/* Cisco */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
										<Globe className="h-8 w-8 text-blue-600" />
									</div>
									<CardTitle className="text-lg">Cisco Systems</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• CCNA (Routing & Switching)</p>
										<p>• CCNP (Enterprise, Security)</p>
										<p>• CCIE (Expert Level)</p>
										<p>• DevNet (Automation)</p>
										<p>• CyberOps (Security)</p>
									</div>
								</CardContent>
							</Card>

							{/* Microsoft */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
										<Server className="h-8 w-8 text-blue-600" />
									</div>
									<CardTitle className="text-lg">Microsoft</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• Azure Fundamentals</p>
										<p>• Azure Administrator</p>
										<p>• Azure Solutions Architect</p>
										<p>• Microsoft 365</p>
										<p>• Power Platform</p>
									</div>
								</CardContent>
							</Card>

							{/* AWS */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900">
										<Globe className="h-8 w-8 text-orange-600" />
									</div>
									<CardTitle className="text-lg">Amazon Web Services</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• Cloud Practitioner</p>
										<p>• Solutions Architect</p>
										<p>• DevOps Engineer</p>
										<p>• Security Specialty</p>
										<p>• Machine Learning</p>
									</div>
								</CardContent>
							</Card>

							{/* CompTIA */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
										<Shield className="h-8 w-8 text-red-600" />
									</div>
									<CardTitle className="text-lg">CompTIA</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• A+ (Hardware/Software)</p>
										<p>• Network+ (Networking)</p>
										<p>• Security+ (Cybersecurity)</p>
										<p>• CySA+ (Cyber Analyst)</p>
										<p>• PenTest+ (Penetration Testing)</p>
										<p>• CASP+</p>
									</div>
								</CardContent>
							</Card>

							{/* ISC2 */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
										<Shield className="h-8 w-8 text-green-600" />
									</div>
									<CardTitle className="text-lg">(ISC)² Security</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• CISSP (Security Professional)</p>
										<p>• CCSP (Cloud Security)</p>
										<p>• SSCP (Systems Security)</p>
										<p>• CISSP-ISSAP (Architecture)</p>
										<p>• CISSP-ISSEP (Engineering)</p>
									</div>
								</CardContent>
							</Card>

							{/* Google Cloud */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
										<Globe className="h-8 w-8 text-yellow-600" />
									</div>
									<CardTitle className="text-lg">Google Cloud</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• Cloud Digital Leader</p>
										<p>• Associate Cloud Engineer</p>
										<p>• Professional Architect</p>
										<p>• Professional DevOps</p>
										<p>• Professional ML Engineer</p>
									</div>
								</CardContent>
							</Card>

							{/* Juniper */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
										<Globe className="h-8 w-8 text-teal-600" />
									</div>
									<CardTitle className="text-lg">Juniper Networks</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• JNCIA (Associate)</p>
										<p>• JNCIS (Specialist)</p>
										<p>• JNCIP (Professional)</p>
										<p>• JNCIE (Expert)</p>
										<p>• Mist AI Certification</p>
									</div>
								</CardContent>
							</Card>

							{/* Additional Vendors */}
							<Card className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50">
								<CardHeader>
									<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
										<Award className="h-8 w-8 text-purple-600" />
									</div>
									<CardTitle className="text-lg">Additional Partners</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-2 text-sm text-muted-foreground">
										<p>• VMware vSphere</p>
										<p>• Red Hat (RHCE/RHCSA)</p>
										<p>• ITIL Foundation/Expert</p>
										<p>• Project Management (PMP)</p>
										<p>• Agile/Scrum Certifications</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Training Delivery Methods */}
					<div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-foreground text-center mb-8">
							Flexible Training Delivery Options
						</h3>

						<div className="grid gap-6 md:grid-cols-3">
							<div className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
									<Users className="h-8 w-8 text-white" />
								</div>
								<h4 className="font-semibold text-lg mb-2">
									Instructor-Led Training
								</h4>
								<p className="text-sm text-muted-foreground">
									Interactive classroom sessions with certified instructors,
									hands-on labs, and real-time Q&A support.
								</p>
							</div>

							<div className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
									<Globe className="h-8 w-8 text-white" />
								</div>
								<h4 className="font-semibold text-lg mb-2">
									Virtual Classrooms
								</h4>
								<p className="text-sm text-muted-foreground">
									Live online training sessions with full interactivity, screen
									sharing, and collaborative learning environments.
								</p>
							</div>

							<div className="text-center">
								<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500">
									<Brain className="h-8 w-8 text-white" />
								</div>
								<h4 className="font-semibold text-lg mb-2">
									Self-Paced Learning
								</h4>
								<p className="text-sm text-muted-foreground">
									Comprehensive online modules with video content, practice
									labs, and progress tracking dashboards.
								</p>
							</div>
						</div>

						<div className="mt-8 text-center">
							<h4 className="font-semibold text-foreground mb-4">
								Training Features & Benefits
							</h4>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-sm">
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>24/7 Lab Access</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Certification Vouchers</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Retake Guarantee</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Career Counseling</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Group Discounts</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Custom Curriculum</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Progress Reporting</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									<span>Alumni Network</span>
								</div>
							</div>
						</div>
					</div>

					{/* Training CTA */}
					<div className="mt-16 text-center">
						<h3 className="text-2xl font-bold text-foreground mb-4">
							Ready to Elevate Your Team's Skills?
						</h3>
						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Contact us to discuss custom training programs tailored to your
							organization's specific needs and objectives.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Button size="lg" className="bg-green-600 hover:bg-green-700">
								Request Training Consultation
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button size="lg" variant="outline">
								Download Training Catalog
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
