import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react"
import type { LinksFunction } from "@remix-run/node"

import "./tailwind.css"
import { TranslationProvider } from "./contexts/translation"
import { PopUpProvider } from "./contexts/popup"
import { Dock } from "./components/navbar"

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Space+Grotesk:wght@300..700&display=swap",
	},
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	return (
		<TranslationProvider>
			<PopUpProvider>
				<div className="bg-background font-gravitas">
					<Outlet />
				</div>
				<Dock />
			</PopUpProvider>
		</TranslationProvider>
	)
}
