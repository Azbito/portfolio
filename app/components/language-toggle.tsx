"use client"

import { Button } from "./ui/button"
import { useTranslation } from "~/hooks/useTranslation"
import Flag from "react-flagpack"

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
				<Flag
					code={language === "en" ? "US" : "BR"}
					size="m"
					hasDropShadow
					hasBorder
					hasBorderRadius
				/>
			</span>
			<span className="hidden text-[1.1rem] dark:inline">
				<Flag
					code={language === "en" ? "US" : "BR"}
					size="m"
					hasDropShadow
					hasBorder
					hasBorderRadius
				/>
			</span>
		</Button>
	)
}
