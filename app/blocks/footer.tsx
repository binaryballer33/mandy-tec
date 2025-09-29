import { Shield } from 'lucide-react'
import React from 'react'

const services = [
	'Custom Software / Programming',
	'Systems Design',
	'Cloud Infrastructure',
	'Research and Development',
	'Enterprise Training and Certification',
	'System / Network Administration & Engineering',
	'Data Management & Analytics',
	'Cybersecurity & Threat Intelligence',
	'IT Consulting & Strategy',
	'IT Support & Maintenance',
	'Many More',
]

export default function Footer() {
	return (
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
								Your IT Partner For Simplifying And Resolving Complex IT
								Challenges
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-foreground mb-4">Services</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								{services.map((service) => (
									<li key={service}>{service}</li>
								))}
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
							<div className="space-y-2 text-sm">
								<p>
									<span className="font-semibold text-foreground">
										Mailing Address:
									</span>{' '}
									1824 Tarah Trace Dr, Brandon, FL
								</p>
								<p>
									<span className="font-semibold text-foreground">Phone:</span>{' '}
									(813) 816-8615
								</p>
								<p>
									<span className="font-semibold text-foreground">Email:</span>{' '}
									shaqmandy@mandy-tec.com
								</p>
							</div>
						</div>
					</div>
					<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
						<p>&copy; 2025 MANDYTEC. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
