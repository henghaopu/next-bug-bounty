const initialTickets = [
	{
		id: '1',
		title: 'Crash on profile photo upload',
		content: 'Fresh bug filed after Sentry alert from production.',
		status: 'new' as const,
	},
	{
		id: '2',
		title: 'Payments API 500s',
		content: 'Tracing logs under review to pinpoint failing hop.',
		status: 'investigating' as const,
	},
	{
		id: '3',
		title: 'Slow search autocomplete',
		content: 'Engineers wiring caching layer to cut latency.',
		status: 'fixing' as const,
	},
	{
		id: '4',
		title: 'Push tokens rejected by APNs',
		content: 'Awaiting new certificate from security team before fix resumes.',
		status: 'investigating' as const,
	},
	{
		id: '5',
		title: 'Rollback guard for billing',
		content: 'Engineers implementing guard rails in the billing worker.',
		status: 'fixing' as const,
	},
	{
		id: '6',
		title: 'Dark mode flicker',
		content: 'Patched and verified in production.',
		status: 'resolved' as const,
	},
]

export default initialTickets
