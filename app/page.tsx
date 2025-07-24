'use client'

import {
	ArrowRight,
	Award,
	CheckCircle,
	FileText,
	Shield,
	Users,
	Globe,
	Server,
	Brain,
	Code,
	GraduationCap,
} from 'lucide-react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'
import { useActiveSection } from '@/hooks/use-active-section'

const naicsCodes = [
	{
		code: '541511',
		title: 'Custom Computer Programming Services',
		description: 'Tailored software solutions for government agencies',
	},
	{
		code: '541512',
		title: 'Computer Systems Design Services',
		description: 'Enterprise-grade system architecture and design',
	},
	{
		code: '541519',
		title: 'Other Computer Related Services',
		description: 'Comprehensive IT consulting and support services',
	},
	{
		code: '518210',
		title: 'Computing Infrastructure Providers',
		description: 'Data processing, web hosting, and cloud services',
	},
	{
		code: '541715',
		title: 'Research and Development',
		description: 'Physical, engineering, and life sciences R&D',
	},
]

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

export default function HomePage() {
	const activeSection = useActiveSection()
	const { resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Get the appropriate image based on theme
	const getBackgroundImage = () => {
		if (!mounted) return '/images/landing-page-light-background-image.png'
		return resolvedTheme === 'dark'
			? '/images/landing-page-dark-background-image.png'
			: '/images/landing-page-light-background-image.png'
	}

	const getLogoImage = () => {
		if (!mounted) return '/images/landing-page-light-background-image.png'
		return resolvedTheme === 'dark'
			? '/images/landing-page-dark-background-image.png'
			: '/images/landing-page-light-background-image.png'
	}

	return (
		<div className="min-h-screen bg-background">
			<style jsx global>{`
				html {
					scroll-behavior: smooth;
				}
			`}</style>
			{/* Header */}
			<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center justify-between px-4">
					<div className="flex items-center space-x-2">
						<img
							src={getLogoImage()}
							alt="MANDYTEC Logo"
							className="h-8 w-8 rounded-full border-black border-2 transition-all duration-500 ease-in-out"
						/>
						<span className="text-xl font-bold text-foreground">MANDYTEC</span>
					</div>
					<nav className="hidden lg:flex items-center space-x-6">
						<Link
							href="#naics"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'naics'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							NAICS Codes
						</Link>
						<Link
							href="#technical-capabilities"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'technical-capabilities'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Technical Capabilities
						</Link>
						<Link
							href="#training"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'training'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Training
						</Link>
						<Link
							href="#capabilities"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'capabilities'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Why Choose Us
						</Link>
						<Link
							href="#leadership"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'leadership'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Leadership
						</Link>
						<Link
							href="#services"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'services'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Services
						</Link>
						<Link
							href="#contact"
							className={`text-sm font-medium transition-colors relative pb-1 ${
								activeSection === 'contact'
									? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-400 after:rounded-full'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							Contact
						</Link>
					</nav>

					<div className="flex items-center space-x-4">
						{/* Mobile menu button */}
						<div className="lg:hidden">
							<Button
								variant="ghost"
								size="sm"
								className="text-foreground hover:bg-muted"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</Button>
						</div>

						{/* Theme Toggle */}
						<ThemeToggle />
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center min-h-screen">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-no-repeat bg-center transition-all duration-500 ease-in-out"
					style={{
						backgroundImage: `url(${getBackgroundImage()})`,
						backgroundSize: 'cover',
					}}
				/>
				{/* Theme-aware overlay for better text readability */}
				<div className="absolute inset-0 bg-background/60 dark:bg-black/70" />

				<div className="container px-4 mx-auto relative z-10">
					<div className="mx-auto max-w-4xl text-center">
						<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-200 shadow-lg">
							Trusted Government Contractor
						</Badge>
						<h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl drop-shadow-lg">
							Winning Government Contracts in{' '}
							<span className="text-blue-600 dark:text-blue-300 drop-shadow-lg">
								Technology & R&D
							</span>
						</h1>
						<p className="mb-8 text-xl text-gray-700 dark:text-gray-100 sm:text-2xl drop-shadow-lg font-medium">
							Specialized expertise in 5 key NAICS codes. From custom
							programming to research & development, we deliver mission-critical
							solutions for federal agencies.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 shadow-lg"
							>
								View Our Capabilities
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="bg-white/90 hover:bg-white text-gray-900 border-gray-300 dark:bg-background/90 dark:hover:bg-background dark:text-foreground dark:border-foreground shadow-lg"
							>
								Download Past Performance
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Divider */}
			<div className="border-t border-gray-200 dark:border-gray-800" />

			{/* NAICS Codes Section */}
			<section id="naics" className="py-20 bg-background">
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold text-foreground sm:text-4xl">
							Our NAICS Code Specializations
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">
							We excel in these specific areas, with proven success in winning
							and executing contracts
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
					</div>
				</div>
			</section>

			{/* Technical Capabilities Section */}
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
								Enterprise-grade technical services designed for
								mission-critical government operations
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
										availability, ITIL-compliant service management, and
										advanced ticketing systems.
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
											<span>
												Penetration testing & vulnerability assessment
											</span>
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
										solutions.
									</CardDescription>
									<div className="space-y-2 text-sm">
										<div className="flex items-center space-x-2">
											<CheckCircle className="h-4 w-4 text-green-400" />
											<span>React, Angular, Vue.js frontend frameworks</span>
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
											<span>AWS/Azure cloud-native hosting</span>
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
											Clearance Levels
										</h4>
										<p className="text-sm text-gray-300">
											Top Secret SCI, Secret, Public Trust, FISMA Moderate/High
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Professional Training & Certification Section */}
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
								Comprehensive technical training programs designed to elevate
								your workforce's capabilities and ensure industry-leading
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
										<CardTitle className="text-xl">
											Corporate Training
										</CardTitle>
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
										<CardTitle className="text-xl">
											Skills Development
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-base mb-4">
										Continuous learning programs focused on emerging
										technologies and advanced technical competencies.
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
										<CardTitle className="text-lg">
											Amazon Web Services
										</CardTitle>
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
										<CardTitle className="text-lg">
											Additional Partners
										</CardTitle>
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
										Live online training sessions with full interactivity,
										screen sharing, and collaborative learning environments.
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

			{/* Capabilities Section */}
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

			{/* CEO Leadership Section */}
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
										SCI clearance and deep expertise in AWS cloud
										infrastructure.
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
												Alexa Smart Home organization, full-stack development
												with React Native, TypeScript, Java, AWS. Supported
												global energy consumption reduction initiatives.
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
												B.S. Information Technology - Western Governors
												University
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
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

			{/* CTA Section */}
			<section id="contact" className="py-20 bg-blue-600 dark:bg-blue-800">
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
							Ready to Win Your Next Contract?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let's discuss how our expertise in these NAICS codes can help your
							agency achieve its mission-critical objectives.
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

			{/* Footer */}
			<footer className="border-t bg-muted/50 py-12">
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-6xl">
						<div className="grid gap-8 md:grid-cols-4">
							<div>
								<div className="flex items-center space-x-2 mb-4">
									<Shield className="h-6 w-6 text-blue-600" />
									<span className="font-bold text-foreground">MANDYTEC</span>
								</div>
								<p className="text-sm text-muted-foreground">
									Your trusted partner for government technology contracts and
									R&D solutions.
								</p>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-4">Services</h4>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>Custom Programming</li>
									<li>Systems Design</li>
									<li>Cloud Infrastructure</li>
									<li>R&D Services</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-4">Company</h4>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>About Us</li>
									<li>Past Performance</li>
									<li>Certifications</li>
									<li>Contact</li>
								</ul>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-4">Contact</h4>
								<div className="space-y-2 text-sm text-muted-foreground">
									<p>1234 Government Way</p>
									<p>Washington, DC 20001</p>
									<p>(555) 123-4567</p>
									<p>contracts@govtechsolutions.com</p>
								</div>
							</div>
						</div>
						<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
							<p>&copy; 2025 MANDYTEC. All rights reserved.</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
