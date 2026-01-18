import Link from 'next/link'
import { TicketStatusBadge } from '@/components/ticket-status'
import initialTickets from '@/data'
import { routes } from '@/routes'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

function TicketsPage() {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<div>
				<h1 className="text-3xl font-bold tracking-tight">Tickets Page</h1>
				<p className="text-sm">All Tickets</p>
			</div>

			<div className="flex-1 flex flex-col items-center gap-y-4 my-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => (
					<Card key={ticket.id} className="w-full max-w-105">
						<CardHeader className="flex items-center justify-between gap-x-3">
							<h2 className="text-lg font-semibold truncate">{ticket.title}</h2>
							<TicketStatusBadge status={ticket.status} className="shrink-0" />
						</CardHeader>
						<CardContent>
							<p className="line-clamp-3 text-gray-500">{ticket.content}</p>
						</CardContent>
						<CardFooter>
							<Link
								href={routes.ticketDetail(ticket.id)}
								className="text-sm underline text-blue-600"
							>
								Details
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}

export default TicketsPage
