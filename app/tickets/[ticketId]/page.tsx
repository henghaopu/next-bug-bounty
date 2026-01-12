import initialTickets from '@/data'

async function TicketDetailPage({ params }: PageProps<'/tickets/[ticketId]'>) {
	const { ticketId } = await params
	const ticket = initialTickets.find((ticket) => ticket.id === ticketId)

	if (!ticket) {
		return <div>Invalid ticket ID.</div>
	}

	return (
		<div>
			<h1 className="text-lg">ticket detail page - {ticketId}</h1>
			<div>
				<h2 className="text-md font-semibold">{ticket.title}</h2>
				<p>{ticket.content}</p>
				<p className="text-sm text-gray-500">Status: {ticket.status}</p>
			</div>
		</div>
	)
}

export default TicketDetailPage
