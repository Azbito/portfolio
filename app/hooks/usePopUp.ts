import { useContext } from "react"
import { PopUpContext } from "~/contexts/popup"

export function usePopUp() {
	const { popup, setPopUp } = useContext(PopUpContext)

	const closePopUp = () => {
		setPopUp({ ...popup, isVisible: false })
	}

	return {
		setPopUp,
		popup,
		closePopUp,
	}
}
