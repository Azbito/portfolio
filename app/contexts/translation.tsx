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
	const [firstLoad, setFirstLoad] = useState<boolean>(true)

	const handleLanguageWatcher = useCallback(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("language", language)
		}
	}, [language])

	const handleFirstLoadLanguage = useCallback(() => {
		const storedLanguage = localStorage.getItem("language")
		if (storedLanguage) {
			setLanguage(storedLanguage as Language)
		}
		setFirstLoad(false)
	}, [])

	useEffect(() => {
		if (firstLoad) {
			handleFirstLoadLanguage()
		}
	}, [firstLoad, handleFirstLoadLanguage])

	useEffect(() => {
		if (!firstLoad) {
			handleLanguageWatcher()
		}
	}, [firstLoad, language, handleLanguageWatcher])

	return (
		<TranslationContext.Provider value={{ language, setLanguage }}>
			{children}
		</TranslationContext.Provider>
	)
}
