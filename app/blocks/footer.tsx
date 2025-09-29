import { Shield } from 'lucide-react'
import React from 'react'

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
								Your trusted partner for government technology contracts and R&D
								solutions.
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
	)
}
