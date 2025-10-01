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

// Training overview data
type TrainingProgram = {
	id: string
	title: string
	description: string
	icon: React.ElementType
	iconColor: string
	features: string[]
}

const trainingPrograms: TrainingProgram[] = [
	{
		id: 'corporate-training',
		title: 'Corporate Training',
		description:
			"Customized Training Programs Tailored To Your Organization's Specific Technology Stack And Business Objectives.",
		icon: GraduationCap,
		iconColor: 'bg-green-500',
		features: [
			'On-Site And Virtual Delivery',
			'Curriculum Customization',
			'Progress Tracking & Reporting',
		],
	},
	{
		id: 'certification-bootcamps',
		title: 'Certification Bootcamps',
		description:
			'Intensive Certification Preparation Programs With Industry-Leading Pass Rates And Hands-on Lab Experiences.',
		icon: Award,
		iconColor: 'bg-blue-500',
		features: [
			'High Certification Pass Rate',
			'Hands-on Lab Environments',
			'Exam Vouchers Included',
		],
	},
	{
		id: 'skills-development',
		title: 'Skills Development',
		description:
			'Continuous Learning Programs Focused on Emerging Technologies And Advanced Technical Competencies.',
		icon: Users,
		iconColor: 'bg-purple-500',
		features: [
			'Emerging Technology Focus',
			'Mentorship Programs',
			'Career Pathway Guidance',
		],
	},
]

// Certification partners data
type CertificationPartner = {
	id: string
	name: string
	icon: React.ElementType
	iconColor: string
	iconBgColor: string
	certifications: string[]
}

const certificationPartners: CertificationPartner[] = [
	{
		id: 'cisco',
		name: 'Cisco Systems',
		icon: Globe,
		iconColor: 'text-blue-600',
		iconBgColor: 'bg-blue-100 dark:bg-blue-900',
		certifications: [
			'CCNA (Routing & Switching)',
			'CCNP (Enterprise, Security)',
			'CCIE (Expert Level)',
			'DevNet (Automation)',
			'CyberOps (Security)',
		],
	},
	{
		id: 'microsoft',
		name: 'Microsoft',
		icon: Server,
		iconColor: 'text-blue-600',
		iconBgColor: 'bg-blue-100 dark:bg-blue-900',
		certifications: [
			'Azure Fundamentals',
			'Azure Administrator',
			'Azure Solutions Architect',
			'Microsoft 365',
			'Power Platform',
		],
	},
	{
		id: 'aws',
		name: 'Amazon Web Services',
		icon: Globe,
		iconColor: 'text-orange-600',
		iconBgColor: 'bg-orange-100 dark:bg-orange-900',
		certifications: [
			'Cloud Practitioner',
			'Solutions Architect',
			'DevOps Engineer',
			'Security Specialty',
			'Machine Learning',
		],
	},
	{
		id: 'comptia',
		name: 'CompTIA',
		icon: Shield,
		iconColor: 'text-red-600',
		iconBgColor: 'bg-red-100 dark:bg-red-900',
		certifications: [
			'A+ (Hardware/Software)',
			'Network+ (Networking)',
			'Security+ (Cybersecurity)',
			'CySA+ (Cyber Analyst)',
			'PenTest+ (Penetration Testing)',
			'CASP+',
		],
	},
	{
		id: 'isc2',
		name: '(ISC)² Security',
		icon: Shield,
		iconColor: 'text-green-600',
		iconBgColor: 'bg-green-100 dark:bg-green-900',
		certifications: [
			'CISSP (Security Professional)',
			'CCSP (Cloud Security)',
			'SSCP (Systems Security)',
			'CISSP-ISSAP (Architecture)',
			'CISSP-ISSEP (Engineering)',
		],
	},
	{
		id: 'google-cloud',
		name: 'Google Cloud',
		icon: Globe,
		iconColor: 'text-yellow-600',
		iconBgColor: 'bg-yellow-100 dark:bg-yellow-900',
		certifications: [
			'Cloud Digital Leader',
			'Associate Cloud Engineer',
			'Professional Architect',
			'Professional DevOps',
			'Professional ML Engineer',
		],
	},
	{
		id: 'juniper',
		name: 'Juniper Networks',
		icon: Globe,
		iconColor: 'text-teal-600',
		iconBgColor: 'bg-teal-100 dark:bg-teal-900',
		certifications: [
			'JNCIA (Associate)',
			'JNCIS (Specialist)',
			'JNCIP (Professional)',
			'JNCIE (Expert)',
			'Mist AI Certification',
		],
	},
	{
		id: 'additional-partners',
		name: 'Additional Partners',
		icon: Award,
		iconColor: 'text-purple-600',
		iconBgColor: 'bg-purple-100 dark:bg-purple-900',
		certifications: [
			'VMware vSphere',
			'Red Hat (RHCE/RHCSA)',
			'ITIL Foundation/Expert',
			'Project Management (PMP)',
			'Agile/Scrum Certifications',
		],
	},
]

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
							Comprehensive Technical Training Programs Designed To Elevate Your
							Workforce's Capabilities And Ensure Industry-Leading
							Certifications Across All Major Technology Platforms.
						</p>
					</div>

					{/* Training Overview Cards */}
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
						{trainingPrograms.map((program) => {
							const IconComponent = program.icon
							return (
								<Card
									key={program.id}
									className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-colors bg-gray-50 dark:bg-gray-900/50"
								>
									<CardHeader>
										<div className="flex items-center space-x-3 mb-4">
											<div className={`p-2 ${program.iconColor} rounded-lg`}>
												<IconComponent className="h-6 w-6 text-white" />
											</div>
											<CardTitle className="text-xl">{program.title}</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base mb-4">
											{program.description}
										</CardDescription>
										<div className="space-y-2 text-sm">
											{program.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-center space-x-2"
												>
													<CheckCircle className="h-4 w-4 text-green-500" />
													<span>{feature}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							)
						})}
					</div>

					{/* Certification Partners */}
					<div className="mb-16">
						<h3 className="text-2xl font-bold text-foreground text-center mb-12">
							Authorized Training Partner Network.
						</h3>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{certificationPartners.map((partner) => {
								const IconComponent = partner.icon
								return (
									<Card
										key={partner.id}
										className="text-center hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900/50"
									>
										<CardHeader>
											<div
												className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${partner.iconBgColor}`}
											>
												<IconComponent
													className={`h-8 w-8 ${partner.iconColor}`}
												/>
											</div>
											<CardTitle className="text-lg">{partner.name}</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="space-y-2 text-sm text-muted-foreground">
												{partner.certifications.map((cert, index) => (
													<p key={index}>• {cert}</p>
												))}
											</div>
										</CardContent>
									</Card>
								)
							})}
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
									Interactive Classroom Sessions with Certified Instructors,
									Hands-on Labs, And Real-time Q&A Support.
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
									Live Online Training Sessions with Full Interactivity, Screen
									Sharing, And Collaborative Learning Environments.
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
									Comprehensive Online Modules with Video Content, Practice
									Labs, And Progress Tracking Dashboards.
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
							Ready To Elevate Your Team's Skills?
						</h3>
						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Contact Us To Discuss Custom Training Programs Tailored to Your
							Organization's Specific Needs And Objectives.
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
