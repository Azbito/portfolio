import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "~/i18n";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <TranslationContext.Provider value={{ language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}

