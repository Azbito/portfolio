import React, { Dispatch, SetStateAction, useState } from "react"
import { useTranslation } from "~/hooks/useTranslation"
import { Language } from "~/i18n"
import { cn } from "~/utils/cn"
import Globe from "~/assets/icons/globe.png"

export function LanguageSelector({
	language,
	setLanguage,
}: {
	language: Language
	setLanguage:
		| Dispatch<SetStateAction<Language>>
		| ((lang: "pt" | "en") => void)
}) {
	const [showOptions, setShowOptions] = useState<boolean>(false)

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setLanguage(event.target.value as Language)
	}

	return (
		<>
			<div
				className={cn(
					"fixed transition-all duration-75 flex flex-col gap-4",
					showOptions ? "top-4 right-4" : "-top-32 -right-32",
				)}
			>
				<button
					onClick={() => {
						setShowOptions(false)
						setLanguage("pt")
					}}
					className="text-start bg-second-foreground px-5 py-2 rounded-md"
				>
					Português
				</button>
				<button
					onClick={() => {
						setShowOptions(false)
						setLanguage("en")
					}}
					className="text-start bg-second-foreground px-5 py-2 rounded-md"
				>
					English
				</button>
			</div>
			<button
				onClick={() => setShowOptions(true)}
				className={cn(
					"bg-white hover:bg-gray-200 p-4 rounded-full shadow fixed transition-all duration-75 flex flex-col gap-4",
					!showOptions ? "top-4 right-4" : "-top-32 -right-32",
				)}
			>
				<img src={Globe} height={32} width={32} />
			</button>
			c
		</>
	)
}
