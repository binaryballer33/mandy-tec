import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { FileText, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function WorkTogether() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<section
				id="contact"
				className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 text-white"
			>
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
							If You Would Like To Work Together
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let's Discuss How Our Expertise in These NAICS Codes Can Help Your
							Agency Achieve Its Mission-Critical Objectives.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
							<Button
								size="lg"
								variant="secondary"
								onClick={() => setIsOpen(true)}
							>
								<Phone className="h-4 w-4" />
								Give Us a Call
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
							>
								<Link
									href="https://certifications.sba.gov/capabilities/YPHXTY8X4A63"
									target="_blank"
									className="flex items-center gap-2"
								>
									<FileText className="h-4 w-4" />
									Get Capabilities Statement
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	)
}

function ContactModal(props: {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}) {
	const { isOpen, setIsOpen } = props

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contact Us</DialogTitle>
					<DialogDescription>Can Be Reached At:</DialogDescription>
				</DialogHeader>
				<div className="space-y-3 mt-4">
					<div className="flex items-center gap-2">
						<Phone className="h-4 w-4" />
						<span>(813) 816-8615</span>
					</div>
					<div className="flex items-center gap-2">
						<Mail className="h-4 w-4" />
						<span>shaqmandy@mandy-tec.com</span>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
