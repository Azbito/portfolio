import { PopUpType } from "~/contexts/popup"
import { cn } from "~/utils/cn"

interface PopUpProps {
	popup: PopUpType
	closePopUp: () => void
}

export function PopUp({ popup, closePopUp }: PopUpProps) {
	return (
		<button
			className={cn(
				popup.isVisible ? "bottom-16" : "-bottom-32",
				"shadow flex flex-col transition-all duration-75 fixed right-20 border-primary border bg-foreground px-4 py-5 rounded-2xl max-[1200px]:right-[50%] max-[1200px]:translate-x-[50%] max-[1200px]:w-[80vw]",
			)}
			onClick={closePopUp}
		>
			<b className="text-start">{popup.title}</b>
			<p className="text-start">{popup.description}</p>
		</button>
	)
}
