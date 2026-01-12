import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { routes } from '@/routes'
import Link from 'next/link'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Bug Bounty',
	description: 'Bug Bounty application built with Next.js',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
			>
				<header className="fixed top-0 left-0 right-0 backdrop-blur">
					<nav>
						<ul className="flex justify-between py-2.5 px-4 border-b">
							<li>
								<Link href={routes.home()} className="text-lg font-bold">
									Home
								</Link>
							</li>
							<li>
								<Link href={routes.tickets()} className="text-sm underline">
									Tickets
								</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main className="py-24 px-8 flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
					{children}
				</main>
			</body>
		</html>
	)
}
