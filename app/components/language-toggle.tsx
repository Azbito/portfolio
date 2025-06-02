"use client"

import { Button } from "./ui/button"
import { useTranslation } from "~/hooks/useTranslation"

export function LanguageToggle() {
	const { language, setLanguage } = useTranslation()

	const toggleLanguage = () => {
		setLanguage(language === "en" ? "pt" : "en")
	}

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2"
			onClick={toggleLanguage}
		>
			<span className="text-[1.1rem] dark:hidden">
				{language === "en" ? "🇬🇧" : "🇧🇷"}
			</span>
			<span className="hidden text-[1.1rem] dark:inline">
				{language === "en" ? "🇬🇧" : "🇧🇷"}
			</span>
		</Button>
	)
}
