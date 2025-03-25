import { useContext } from "react"
import { TranslationContext } from "~/contexts/translation"
import { translations, TranslationKeys } from "~/i18n"

export function useTranslation() {
	const context = useContext(TranslationContext)

	if (!context) {
		return {
			t: (key: TranslationKeys) => key,
			setLanguage: () => {},
		}
	}

	const { language, setLanguage } = context

	return {
		t: (key: TranslationKeys) => translations[language][key],
		setLanguage,
	}
}
