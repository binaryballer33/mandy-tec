import React from 'react'

import {
	Award,
	CheckCircle,
	FileText,
	Shield,
	Users,
	Globe,
	Server,
	Brain,
	Code,
} from 'lucide-react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type TechnicalCapability = {
	id: string
	title: string
	description: string
	icon: React.ElementType
	iconColor: string
	features: string[]
}

const technicalCapabilities: TechnicalCapability[] = [
	{
		id: 'help-desk',
		title: 'Enterprise Help Desk Operations',
		description:
			'Multi-tiered Technical Support Infrastructure With 24/7/365 Availability, ITIL-Compliant Service Management, And Advanced Ticketing Systems.',
		icon: Users,
		iconColor: 'bg-blue-500',
		features: [
			'Level 1-3 Escalation Procedures',
			'ServiceNow & Remedy Integration',
			'SLA Compliance Monitoring',
			'Remote Desktop & Mobile Device Support',
		],
	},
	{
		id: 'network-engineering',
		title: 'Network Engineering & Architecture',
		description:
			'Advanced Network Design, Implementation, And Optimization Using Enterprise-Grade Routing, Switching, And Security Protocols.',
		icon: Globe,
		iconColor: 'bg-green-500',
		features: [
			'Cisco & Juniper Enterprise Solutions',
			'SD-WAN & MPLS Implementation',
			'Network Segmentation & Microsegmentation',
			'BGP, OSPF, EIGRP Routing Protocols',
		],
	},
	{
		id: 'systems-engineering',
		title: 'Systems Engineering & Administration',
		description:
			'Comprehensive Systems Lifecycle Management Including Virtualization, Containerization, And Hybrid Cloud Orchestration.',
		icon: Server,
		iconColor: 'bg-purple-500',
		features: [
			'VMware vSphere & Hyper-V Virtualization',
			'Kubernetes & Docker Containerization',
			'Infrastructure as Code (Terraform, Ansible)',
			'Linux/Windows Enterprise Administration',
		],
	},
	{
		id: 'cybersecurity',
		title: 'Advanced Cybersecurity Operations',
		description:
			'Comprehensive Security Operations Including Threat Hunting, Incident Response, And Compliance Management For Classified Environments.',
		icon: Shield,
		iconColor: 'bg-red-500',
		features: [
			'SIEM/SOAR Platform Management',
			'Penetration Testing & Vulnerability Assessment',
			'NIST, FISMA, FedRAMP Compliance',
			'Zero Trust Architecture Implementation',
		],
	},
	{
		id: 'ai-ml',
		title: 'Artificial Intelligence & Machine Learning',
		description:
			'Advanced AI/ML Solutions Including Natural Language Processing, Computer Vision, And Predictive Analytics For Government Applications.',
		icon: Brain,
		iconColor: 'bg-orange-500',
		features: [
			'TensorFlow & PyTorch Model Development',
			'MLOps Pipeline Automation',
			'Large Language Model Integration',
			'Edge AI & Real-Time Inference',
		],
	},
	{
		id: 'software-engineering',
		title: 'Software Engineering & Web Solutions',
		description:
			'Full-stack Application Development With Modern Frameworks, Microservices Architecture, And Enterprise-Grade Hosting Solutions. Also Provide Solutions For Legacy Systems.',
		icon: Code,
		iconColor: 'bg-indigo-500',
		features: [
			'Next JS, React, Angular, Vue.js Frontend Frameworks',
			'Microservices & API Gateway Architecture',
			'CI/CD Pipeline Automation',
			'AWS / Azure /Google GCP Cloud-Native Hosting',
		],
	},
]

export default function TechnicalCapabilities() {
	return (
		<section
			id="technical-capabilities"
			className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white"
		>
			<div className="container px-4 mx-auto">
				<div className="mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
							Core Technical Competencies
						</Badge>
						<h2 className="text-3xl font-bold sm:text-4xl mb-4">
							Technical Capabilities
						</h2>
						<p className="text-xl text-blue-100">
							Enterprise-Grade Technical Services Designed For Mission-Critical
							Government Operations
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{technicalCapabilities.map((capability) => {
							const IconComponent = capability.icon

							return (
								<Card
									key={capability.id}
									className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all"
								>
									<CardHeader>
										<div className="flex items-center space-x-3 mb-4">
											<div className={`p-2 ${capability.iconColor} rounded-lg`}>
												<IconComponent className="h-6 w-6" />
											</div>
											<CardTitle className="text-xl">
												{capability.title}
											</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-gray-200 mb-4">
											{capability.description}
										</CardDescription>
										<div className="space-y-2 text-sm">
											{capability.features.map((feature, index) => (
												<div
													key={index}
													className="flex items-center space-x-2"
												>
													<CheckCircle className="h-4 w-4 text-green-400" />
													<span>{feature}</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							)
						})}
					</div>

					{/* Technical Standards & Compliance */}
					<div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
						<h3 className="text-2xl font-bold text-center mb-8">
							Technical Standards & Compliance Framework
						</h3>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="text-center">
								<div className="mb-4">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
										<FileText className="h-8 w-8" />
									</div>
									<h4 className="font-semibold text-lg mb-2">
										Security Frameworks
									</h4>
									<p className="text-sm text-gray-300">
										NIST 800-53, FISMA, FedRAMP, DISA STIGs, CIS Controls
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="mb-4">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
										<Award className="h-8 w-8" />
									</div>
									<h4 className="font-semibold text-lg mb-2">
										Quality Standards
									</h4>
									<p className="text-sm text-gray-300">
										ISO 27001, ITIL v4, CMMI Level 3, Agile/DevSecOps
									</p>
								</div>
							</div>
							<div className="text-center">
								<div className="mb-4">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
										<Shield className="h-8 w-8" />
									</div>
									<h4 className="font-semibold text-lg mb-2">
										Security Clearance Levels
									</h4>
									<p className="text-sm text-gray-300">
										Top Secret SCI, Top Secret, Secret, Public Trust
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
