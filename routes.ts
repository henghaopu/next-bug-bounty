import { Route } from 'next'

type RouteBuilder = (...args: never[]) => Route

type RouteConfig = Record<string, RouteBuilder>

export const routes = {
	home: (): Route<'/'> => '/',
	tickets: (): Route<'/tickets'> => '/tickets',
	ticketDetail: (ticketId: string): Route => `/tickets/${ticketId}` as Route,
} satisfies RouteConfig

export type RouteName = keyof typeof routes
