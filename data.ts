const initialTickets = [
	{
		id: '1',
		title: 'Login issue',
		content: 'Unable to login with correct credentials.',
		status: 'open' as const,
	},
	{
		id: '2',
		title: 'Page not loading',
		content: 'The dashboard page is not loading properly.',
		status: 'in-progress' as const,
	},
	{
		id: '3',
		title: 'Feature request',
		content: 'Add dark mode to the application.',
		status: 'closed' as const,
	},
]

export default initialTickets
