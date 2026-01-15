import type { ReactNode, SVGProps } from 'react'

export type TicketStatus = 'new' | 'investigating' | 'fixing' | 'resolved'

type IconProps = SVGProps<SVGSVGElement>

type StatusMeta = {
	label: string
	accentClass: string
	Icon: (props: IconProps) => ReactNode
}

const statusMeta: Record<TicketStatus, StatusMeta> = {
	new: {
		label: 'New',
		accentClass: 'text-amber-600',
		Icon: BugIcon,
	},
	investigating: {
		label: 'Investigating',
		accentClass: 'text-sky-600',
		Icon: SearchIcon,
	},
	fixing: {
		label: 'Fixing',
		accentClass: 'text-blue-600',
		Icon: WrenchIcon,
	},
	resolved: {
		label: 'Resolved',
		accentClass: 'text-emerald-600',
		Icon: CheckCircleIcon,
	},
}

type TicketStatusBadgeProps = {
	status: TicketStatus
	className?: string
}

export function TicketStatusBadge({
	status,
	className,
}: TicketStatusBadgeProps) {
	const { Icon, label, accentClass } = statusMeta[status]
	const combinedClassName = [
		'inline-flex items-center gap-x-1.5 text-sm font-medium',
		accentClass,
		className,
	]
		.filter(Boolean)
		.join(' ')

	return (
		<span className={combinedClassName}>
			<Icon className="h-4 w-4" />
			<span>{label}</span>
		</span>
	)
}

// Icons copied from lucide.dev (ISC License) to avoid runtime dependencies.
function BugIcon(props: IconProps) {
	return (
		<svg
			className="lucide lucide-bug"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M12 20v-9" />
			<path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4Z" />
			<path d="M14.12 3.88 16 2" />
			<path d="M21 21a4 4 0 0 0-3.81-4" />
			<path d="M21 5a4 4 0 0 1-3.55 3.97" />
			<path d="M22 13h-4" />
			<path d="M3 21a4 4 0 0 1 3.81-4" />
			<path d="M3 5a4 4 0 0 0 3.55 3.97" />
			<path d="M6 13H2" />
			<path d="m8 2 1.88 1.88" />
			<path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
		</svg>
	)
}

function SearchIcon(props: IconProps) {
	return (
		<svg
			className="lucide lucide-search"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="m21 21-4.34-4.34" />
			<circle cx="11" cy="11" r="8" />
		</svg>
	)
}

function WrenchIcon(props: IconProps) {
	return (
		<svg
			className="lucide lucide-wrench"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 1 1-3-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984Z" />
		</svg>
	)
}

function CheckCircleIcon(props: IconProps) {
	return (
		<svg
			className="lucide lucide-check-circle"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path d="M21.801 10A10 10 0 1 1 17 3.335" />
			<path d="m9 11 3 3L22 4" />
		</svg>
	)
}
