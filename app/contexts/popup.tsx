import {
	createContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useState,
} from "react"

export type PopUpType = {
	title: string
	description: string
	isVisible: boolean
}

interface PopUpContextType {
	popup: PopUpType
	setPopUp: Dispatch<SetStateAction<PopUpType>>
}

const defaultPopUp = Object.freeze({
	title: "",
	description: "",
	isVisible: false,
})

const defaultPopUpCtx = Object.freeze({
	popup: defaultPopUp,
	setPopUp: () => {},
})

export const PopUpContext = createContext<PopUpContextType>(defaultPopUpCtx)

export function PopUpProvider({ children }: { children: ReactNode }) {
	const [popup, setPopUp] = useState<PopUpType>(defaultPopUp)

	return (
		<PopUpContext.Provider value={{ popup, setPopUp }}>
			{children}
		</PopUpContext.Provider>
	)
}
