import { useTranslation } from "~/hooks/useTranslation"
import { Button } from "./button"
import { useState } from "react"
import { links } from "~/data/links"
import { cn } from "~/utils/cn"
import { Link } from "@remix-run/react"

const renderButtons = () => {
	return links.map((link) => {
		if (link?.content) {
			return (
				<Button key={link.id} className={`bg-${link.color} w-[10rem]`}>
					{link.name}
				</Button>
			)
		}

		if (!link.href) return null

		return (
			<Link to={link.href} key={link.id}>
				<Button className={`bg-${link.color} w-[10rem]`}>
					{link.name}
				</Button>
			</Link>
		)
	})
}

export function HomeHeader() {
	const { t } = useTranslation()

	return (
		<div className="flex h-[80vh] bg-foreground slide-top-to-bottom-anim">
			<div className="flex-[4] flex justify-center flex-col gap-8 pt-0 p-8 pl-[10vw]">
				<h1 className="text-4xl">{t("introduction")}</h1>
				<div className="flex flex-col gap-4 items-start">
					<div className="border p-4">
						<b className="text-primary text-2xl italic">
							{t("role")}
						</b>
					</div>
				</div>
			</div>
			<div className="flex-[4] pr-[8rem] flex flex-col">
				<div
					className="flex justify-center items-center h-full"
					dangerouslySetInnerHTML={{
						__html: t("history"),
					}}
				/>
				<div className="flex gap-2 translate-y-[-4rem]">
					{renderButtons()}
				</div>
			</div>
		</div>
	)
}
