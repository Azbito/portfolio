import { useTranslation } from "~/hooks/useTranslation"
import { Button } from "./button"
import { links } from "~/data/links"
import { Link } from "@remix-run/react"
import { usePopUp } from "~/hooks/usePopUp"
import { copyToClipboard } from "~/utils/clipboard"

const renderButtons = (handlePopUp: (content: string | undefined) => void) => {
	return links.map((link) => {
		if (link?.content) {
			return (
				<Button
					onClick={() => handlePopUp(link.content)}
					key={link.id}
					className={`bg-${link.color} w-[10rem] rounded-full`}
				>
					{link.name}
				</Button>
			)
		}

		if (!link.href) return null

		return (
			<Link to={link.href} key={link.id}>
				<Button className={`bg-${link.color} w-[10rem] rounded-full`}>
					{link.name}
				</Button>
			</Link>
		)
	})
}

export function HomeHeader() {
	const { t } = useTranslation()
	const { setPopUp } = usePopUp()

	const handlePopUp = (content: string | undefined) => {
		if (content) {
			setPopUp({
				title: t("success"),
				description: t("successCopy"),
				isVisible: true,
			})

			copyToClipboard(content)
		}
	}

	return (
		<div className="flex max-w-[80vw] rounded-xl border border-accent min-h-[600px] bg-foreground max-[1250px]:flex-col max-[1250px]:pt-36">
			<div className="flex-[4] flex justify-center flex-col gap-8 pt-0 p-8 pl-[10vw]">
				<h1 className="text-4xl max-[1250px]:text-center">
					{t("introduction")}
				</h1>
				<div className="flex flex-col gap-4 items-start max-[1250px]:items-center">
						<b className="text-primary text-2xl italic">
							{t("role")}
						</b>
				</div>
			</div>
			<div className="flex-[4] pr-[8rem]  max-[1250px]:px-8 flex flex-col">
				<div
					className="flex justify-center items-center h-full max-[1250px]:text-center"
					dangerouslySetInnerHTML={{
						__html: t("history"),
					}}
				/>
				<div className="flex gap-2 max-[1250px]:pb-8 max-[1250px]:flex-wrap max-[1250px]:items-center max-[1250px]:justify-center max-[1250px]:mt-8 min-[1250px]:translate-y-[-4rem]">
					{renderButtons(handlePopUp)}
				</div>
			</div>
		</div>
	)
}
