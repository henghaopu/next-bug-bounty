import Link from 'next/link'
import { TicketStatusBadge } from '@/components/ticket-status'
import initialTickets from '@/data'
import { routes } from '@/routes'

function TicketsPage() {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1>
				<p className="text-sm">All Tickets</p>
			</div>

			<div className="flex-1 flex flex-col items-center gap-y-4 my-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => (
					<div
						key={ticket.id}
						className="border p-4 rounded w-full max-w-105 space-y-2"
					>
						<div className="flex items-start justify-between gap-x-3">
							<div className="flex-1 min-w-0">
								<h2 className="text-lg font-semibold truncate">
									{ticket.title}
								</h2>
								<p className="text-sm text-gray-500 truncate">
									{ticket.content}
								</p>
							</div>
							<TicketStatusBadge status={ticket.status} className="shrink-0" />
						</div>

						<Link
							href={routes.ticketDetail(ticket.id)}
							className="text-sm underline text-blue-600"
						>
							Details
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default TicketsPage
