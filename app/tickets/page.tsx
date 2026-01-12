import Link from 'next/link'
import initialTickets from '@/data'
import { routes } from '@/routes'

const statusIconMap = {
	open: '🟢',
	'in-progress': '⏳',
	closed: '✅',
} as const

type TicketStatus = keyof typeof statusIconMap

const isTicketStatus = (status: string): status is TicketStatus =>
	status in statusIconMap

const getStatusIcon = (status: string) =>
	isTicketStatus(status) ? statusIconMap[status] : '❔'

function TicketsPage() {
	return (
		<div>
			<h1 className="text-lg">Tickets Page</h1>

			<div className="flex gap-4 my-4">
				{initialTickets.map((ticket) => {
					const statusIcon = getStatusIcon(ticket.status)

					return (
						<div key={ticket.id} className="mb-4">
							<h2 className="text-md font-semibold">{ticket.title}</h2>

							<p className="text-sm text-gray-500">
								Status:
								<span className="ml-1 inline-flex items-center gap-1">
									<span aria-hidden="true">{statusIcon}</span>
									<span className="capitalize">{ticket.status}</span>
								</span>
							</p>

							<Link
								href={routes.ticketDetail(ticket.id)}
								className="underline text-blue-600"
							>
								View Details
							</Link>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default TicketsPage
