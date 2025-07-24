import {
	ArrowLeft,
	Award,
	BookOpen,
	Globe,
	Mail,
	Phone,
	Shield,
	Star,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const certifications = [
	{ name: 'CISSP', category: 'Security', level: 'Expert' },
	{ name: 'CASP+', category: 'Security', level: 'Advanced' },
	{ name: 'Pentest+', category: 'Security', level: 'Advanced' },
	{ name: 'CySA+', category: 'Security', level: 'Advanced' },
	{ name: 'CEH', category: 'Security', level: 'Advanced' },
	{
		name: 'AWS Solutions Architect Associate',
		category: 'Cloud',
		level: 'Professional',
	},
	{ name: 'Linux+', category: 'Infrastructure', level: 'Professional' },
	{ name: 'CCNA', category: 'Networking', level: 'Professional' },
	{ name: 'ITIL', category: 'Management', level: 'Foundation' },
	{ name: 'Project+', category: 'Management', level: 'Professional' },
]

const technicalSkills = {
	Infrastructure: [
		'Linux',
		'Networking',
		'Security',
		'AWS',
		'CI/CD',
		'Cloud',
		'CDK',
		'IaaC',
	],
	Programming: [
		'Java',
		'TypeScript/JavaScript',
		'Python',
		'Ruby',
		'Bash',
		'C++',
	],
	Frontend: [
		'HTML',
		'CSS',
		'jQuery',
		'React',
		'React Native',
		'Material UI',
		'ShadCN',
		'Tailwind',
		'Bootstrap',
		'Next.js',
	],
	Backend: [
		'Spring',
		'Flask',
		'Django',
		'Node.js',
		'C#',
		'REST APIs',
		'Authentication',
		'Authorization',
		'Payments',
	],
	Database: ['SQL', 'DBMS', 'ORM', 'Database Queries'],
	Tools: ['Git', 'GitHub', 'Jira', 'Kanban', 'Agile'],
}

const workExperience = [
	{
		title: 'Software Engineer',
		company: 'Amazon',
		period: 'May 2022 - Dec 2023',
		description:
			'As a member of the Alexa Smart Home organization, I supported the energy consumption component of the service. Technologies that my team used included React Native, Typescript, Java, AWS, etc. I worked across the full stack for Alexa Smart Home touching both front and back end services involved in making the Alexa Smart Home mobile app work. Supported the company in helping to reduce the impact of global warming by reducing electricity consumption across a global scale.',
		technologies: ['React Native', 'TypeScript', 'Java', 'AWS'],
	},
	{
		title: 'Site Reliability Engineer',
		company: 'Amazon',
		period: 'Oct 2021 - May 2022',
		description:
			'I root caused deployment failures across 20+ Pipelines, made code changes to fix the failures and scripts to automate repetitive tasks, created/updated documentation and more. I worked with other Software Engineers on the daily bases in order to make sure that the services I supported continued to run with little to no downtime. I participated in an oncall rotation of 10 engineers that supported the AWS BuilderTools organization.',
		technologies: [
			'CloudFormation',
			'CodeDeploy',
			'CodeCommit',
			'CodeBuild',
			'CodePipeline',
			'RDS',
			'DynamoDB',
			'SWF',
			'SOS',
		],
	},
	{
		title: 'Cloud Support Engineer',
		company: 'Amazon',
		period: 'May 2022 - Dec 2023',
		description:
			'I troubleshoot customer cases in our ticketing system in order to determine the root cause of their problem. I provided support and advice to help AWS customers fix their AWS resources and improve their current level of knowledge about the AWS platform.',
		technologies: [
			'EC2',
			'IAM',
			'S3',
			'VPC',
			'KMS',
			'CloudWatch',
			'CloudTrail',
			'Route53',
		],
	},
	{
		title: 'Network Administrator',
		company: 'US Military',
		period: 'Aug 2017 - June 2021',
		description:
			'Here I maintained our networks critical infrastructure and provided IT support to our 10,000+ military and civilian workforce up to the Top-Secret SCI level. I made sure that our Infrastructure was always secure, available and accessible by those who had authorization.',
		technologies: [
			'TACLANES',
			'Cisco/Juniper Router/Switches',
			'VoIP',
			'Printers',
			'IAM',
			'Desktops',
			'Laptops',
			'Servers',
		],
	},
]

export default function CEOProfilePage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
				<div className="container flex h-16 items-center justify-between px-4">
					<Link href="/" className="flex items-center space-x-2">
						<ArrowLeft className="h-5 w-5" />
						<img
							src="/images/naics-codes.png"
							alt="MANDYTEC Logo"
							className="h-8 w-8 rounded-full"
						/>
						<span className="text-xl font-bold text-gray-900">MANDYTEC</span>
					</Link>
					<Button asChild>
						<Link href="/#contact">Contact Us</Link>
					</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
				<div className="container px-4">
					<div className="mx-auto max-w-4xl">
						<div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
							<div className="lg:col-span-2">
								<Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
									CEO & Founder
								</Badge>
								<h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									Shaquille Mandy
								</h1>
								<p className="mb-6 text-xl text-gray-600">
									Fullstack Software Engineer & Cybersecurity Expert
								</p>
								<p className="mb-8 text-lg text-gray-600">
									Former Amazon engineer with Top-Secret SCI clearance, leading
									MANDYTEC with extensive experience in government contracting,
									enterprise software development, and cybersecurity solutions.
								</p>
								<div className="flex flex-wrap gap-4">
									<div className="flex items-center space-x-2 text-gray-600">
										<Mail className="h-4 w-4" />
										<span>shaqmandy@gmail.com</span>
									</div>
									<div className="flex items-center space-x-2 text-gray-600">
										<Phone className="h-4 w-4" />
										<span>+1 813-816-8615</span>
									</div>
									<div className="flex items-center space-x-2 text-gray-600">
										<Globe className="h-4 w-4" />
										<span>www.shaquillemandy.com</span>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<Card className="bg-gray-50 dark:bg-gray-900/50">
									<CardHeader>
										<CardTitle className="text-lg">Quick Facts</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										<div className="flex items-center space-x-2">
											<Shield className="h-4 w-4 text-blue-600" />
											<span className="text-sm">Top-Secret SCI Clearance</span>
										</div>
										<div className="flex items-center space-x-2">
											<Award className="h-4 w-4 text-green-600" />
											<span className="text-sm">
												10+ Professional Certifications
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<BookOpen className="h-4 w-4 text-purple-600" />
											<span className="text-sm">M.S. Cybersecurity & IA</span>
										</div>
										<div className="flex items-center space-x-2">
											<Star className="h-4 w-4 text-orange-600" />
											<span className="text-sm">Rubik's Cube: 11 seconds</span>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Work Experience */}
			<section className="py-16 bg-white">
				<div className="container px-4">
					<div className="mx-auto max-w-4xl">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
							Professional Experience
						</h2>

						<div className="space-y-8">
							{workExperience.map((job, index) => (
								<Card
									key={index}
									className="border-l-4 border-l-blue-500 bg-gray-50 dark:bg-gray-900/50"
								>
									<CardHeader>
										<div className="flex justify-between items-start">
											<div>
												<CardTitle className="text-xl">{job.title}</CardTitle>
												<CardDescription className="text-lg font-semibold text-blue-600">
													{job.company}
												</CardDescription>
											</div>
											<Badge variant="outline">{job.period}</Badge>
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-gray-700 mb-4">{job.description}</p>
										<div>
											<h4 className="font-semibold text-gray-900 mb-2">
												Key Technologies:
											</h4>
											<div className="flex flex-wrap gap-2">
												{job.technologies.map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="secondary"
														className="text-xs"
													>
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Technical Skills */}
			<section className="py-16 bg-gray-50">
				<div className="container px-4">
					<div className="mx-auto max-w-6xl">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
							Technical Expertise
						</h2>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{Object.entries(technicalSkills).map(([category, skills]) => (
								<Card key={category} className="bg-gray-50 dark:bg-gray-900/50">
									<CardHeader>
										<CardTitle className="text-lg">{category}</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2">
											{skills.map((skill, index) => (
												<Badge
													key={index}
													variant="outline"
													className="text-xs"
												>
													{skill}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Certifications */}
			<section className="py-16 bg-white">
				<div className="container px-4">
					<div className="mx-auto max-w-6xl">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
							Certifications & Credentials
						</h2>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{certifications.map((cert, index) => (
								<Card key={index} className="hover:shadow-md transition-shadow">
									<CardContent className="p-4">
										<div className="flex items-center justify-between">
											<div>
												<h4 className="font-semibold text-gray-900">
													{cert.name}
												</h4>
												<p className="text-sm text-gray-600">{cert.category}</p>
											</div>
											<Badge
												variant={
													cert.level === 'Expert'
														? 'default'
														: cert.level === 'Advanced'
														? 'secondary'
														: 'outline'
												}
												className="text-xs"
											>
												{cert.level}
											</Badge>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Education */}
			<section className="py-16 bg-gray-50">
				<div className="container px-4">
					<div className="mx-auto max-w-4xl">
						<h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
							Education & Training
						</h2>

						<div className="space-y-6">
							<Card className="border-l-4 border-l-purple-500">
								<CardHeader>
									<CardTitle>
										Master of Science - Cybersecurity & Information Assurance
									</CardTitle>
									<CardDescription>
										Western Governors University • November 2022 - April 2023
									</CardDescription>
								</CardHeader>
							</Card>

							<Card className="border-l-4 border-l-blue-500">
								<CardHeader>
									<CardTitle>
										Bachelor of Science - Information Technology
									</CardTitle>
									<CardDescription>
										Western Governors University • September 2018 - September
										2022
									</CardDescription>
								</CardHeader>
							</Card>

							<Card className="border-l-4 border-l-green-500">
								<CardHeader>
									<CardTitle>Software Development Engineer Bootcamp</CardTitle>
									<CardDescription>
										TLG Software Engineer Bootcamp • May 2022 - Oct 2022
									</CardDescription>
								</CardHeader>
							</Card>

							<Card className="border-l-4 border-l-orange-500">
								<CardHeader>
									<CardTitle>Coding Bootcamp</CardTitle>
									<CardDescription>
										Fullstack Academy • Completed
									</CardDescription>
								</CardHeader>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Personal Touch */}
			<section className="py-16 bg-white">
				<div className="container px-4">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							Beyond the Resume
						</h2>
						<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
							<p className="text-lg text-gray-700 mb-6">
								"Hello, I'm Shaquille Mandy. I'd like to take this time to tell
								you a little bit about myself, just to put a little life behind
								this paper or computer screen."
							</p>
							<div className="grid gap-6 md:grid-cols-2 text-left">
								<div>
									<h4 className="font-semibold text-gray-900 mb-2">Passions</h4>
									<p className="text-gray-600">
										Traveling, basketball, drawing, nature, swimming, FOOD,
										coding
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-2">
										Personality
									</h4>
									<p className="text-gray-600">
										Relaxed, easy going, extroverted when the time calls for it
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-2">
										Languages
									</h4>
									<p className="text-gray-600">
										English (Fluent), Spanish (Intermediate), Portuguese
										(Intermediate)
									</p>
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-2">Fun Fact</h4>
									<p className="text-gray-600">
										Can solve a Rubik's Cube in under 20 seconds (best time: 11
										seconds!)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-blue-600">
				<div className="container px-4">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold text-white mb-6">
							Ready to Work Together?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let's discuss how MANDYTEC can help your organization achieve its
							technology and security objectives.
						</p>
						<Button size="lg" variant="secondary" asChild>
							<Link href="/#contact">Get In Touch</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
