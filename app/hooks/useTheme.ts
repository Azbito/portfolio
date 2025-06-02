import { useEffect, useState } from "react"

type Theme = "light" | "dark"

const THEME_KEY = "theme"

export function useTheme() {
	const [theme, setTheme] = useState<Theme | null>(null)

	useEffect(() => {
		const stored = localStorage.getItem(THEME_KEY)
		const initialTheme: Theme = stored === "dark" ? "dark" : "light"
		setTheme(initialTheme)

		document.body.classList.remove("light", "dark")
		document.body.classList.add(initialTheme)
	}, [])

	useEffect(() => {
		if (theme === null) return
		localStorage.setItem(THEME_KEY, theme)
		document.body.classList.remove("light", "dark")
		document.body.classList.add(theme)
	}, [theme])

	const toggleTheme = () => {
		if (theme === null) return
		setTheme((prev) => (prev === "light" ? "dark" : "light"))
	}

	return {
		theme: theme ?? "light",
		setTheme,
		toggleTheme,
	}
}
