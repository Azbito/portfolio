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
import { PopUp } from "./components/popup"
import { usePopUp } from "./hooks/usePopUp"
import { LanguageSelector } from "./components/selector"
import { useTranslation } from "./hooks/useTranslation"

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
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

function PopUpComponent() {
	const { popup, closePopUp } = usePopUp()
	return <PopUp popup={popup} closePopUp={closePopUp} />
}

function LanguageComponent() {
	const { language, setLanguage } = useTranslation()

	type LanguagesProps = "pt" | "en"

	return (
		<LanguageSelector
			language={language as LanguagesProps}
			setLanguage={setLanguage}
		/>
	)
}

export default function App() {
	return (
		<TranslationProvider>
			<PopUpProvider>
				<div className="bg-background font-jetbrains">
					<Outlet />
				</div>
				<LanguageComponent />
				<PopUpComponent />
			</PopUpProvider>
		</TranslationProvider>
	)
}
