import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
} from "react"
import { Language } from "~/i18n"

interface TranslationContextType {
	language: Language
	setLanguage: (lang: Language) => void
}

export const TranslationContext = createContext<
	TranslationContextType | undefined
>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("pt")

	const handleLanguageWatcher = useCallback(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("language", language)
		}
	}, [language])

	useEffect(() => {
		if (typeof window !== "undefined") {
			handleLanguageWatcher()
		}
	}, [handleLanguageWatcher])

	return (
		<TranslationContext.Provider value={{ language, setLanguage }}>
			{children}
		</TranslationContext.Provider>
	)
}
