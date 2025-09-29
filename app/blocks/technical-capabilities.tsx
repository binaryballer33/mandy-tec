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
							Advanced Technical Capabilities
						</h2>
						<p className="text-xl text-blue-100">
							Enterprise-grade technical services designed for mission-critical
							government operations
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{/* Help Desk Support */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-blue-500 rounded-lg">
										<Users className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Enterprise Help Desk Operations
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Multi-tiered technical support infrastructure with 24/7/365
									availability, ITIL-compliant service management, and advanced
									ticketing systems.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Level 1-3 escalation procedures</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>ServiceNow & Remedy integration</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>SLA compliance monitoring</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Remote desktop & mobile device support</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Network Engineering */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-green-500 rounded-lg">
										<Globe className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Network Engineering & Architecture
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Advanced network design, implementation, and optimization
									using enterprise-grade routing, switching, and security
									protocols.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Cisco & Juniper enterprise solutions</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>SD-WAN & MPLS implementation</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Network segmentation & microsegmentation</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>BGP, OSPF, EIGRP routing protocols</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* System Engineering */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-purple-500 rounded-lg">
										<Server className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Systems Engineering & Administration
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Comprehensive systems lifecycle management including
									virtualization, containerization, and hybrid cloud
									orchestration.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>VMware vSphere & Hyper-V virtualization</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Kubernetes & Docker containerization</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Infrastructure as Code (Terraform, Ansible)</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Linux/Windows enterprise administration</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Cybersecurity */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-red-500 rounded-lg">
										<Shield className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Advanced Cybersecurity Operations
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Comprehensive security operations including threat hunting,
									incident response, and compliance management for classified
									environments.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>SIEM/SOAR platform management</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Penetration testing & vulnerability assessment</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>NIST, FISMA, FedRAMP compliance</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Zero Trust architecture implementation</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* AI Support */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-orange-500 rounded-lg">
										<Brain className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Artificial Intelligence & Machine Learning
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Advanced AI/ML solutions including natural language
									processing, computer vision, and predictive analytics for
									government applications.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>TensorFlow & PyTorch model development</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>MLOps pipeline automation</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Large Language Model integration</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Edge AI & real-time inference</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Software Engineering & Web Services */}
						<Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all">
							<CardHeader>
								<div className="flex items-center space-x-3 mb-4">
									<div className="p-2 bg-indigo-500 rounded-lg">
										<Code className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">
										Software Engineering & Web Solutions
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-200 mb-4">
									Full-stack application development with modern frameworks,
									microservices architecture, and enterprise-grade hosting
									solutions. Also provide solutions for legacy systems.
								</CardDescription>
								<div className="space-y-2 text-sm">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>
											Next JS, React, Angular, Vue.js frontend frameworks
										</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>Microservices & API gateway architecture</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>CI/CD pipeline automation</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-400" />
										<span>AWS / Azure /Google GCP cloud-native hosting</span>
									</div>
								</div>
							</CardContent>
						</Card>
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
