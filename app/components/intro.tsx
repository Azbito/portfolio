import Me from "~/assets/photos/me/2.png"
import { useTranslation } from "~/hooks/useTranslation"
import { SafeHTML } from "~/components/safe-html"
import { Avatar } from "~/components/avatar"
import { Card } from "./ui/card"
import { BlurFade } from "./blur-fade"

export function Intro() {
	const { t } = useTranslation()

	return (
		<div className="flex gap-4 w-full">
			<BlurFade delay={0.4}>
				<Avatar src={Me} />
			</BlurFade>

			<div className="flex items-start justify-between">
				<div className="flex flex-col">
					<BlurFade delay={0.4}>
						<h1 className="text-5xl">{t("role")}</h1>
						<h2 className="mt-4 text-lg w-140">
							{t("iAm")}{" "}
							<strong className="bg-brand-primary px-2 py-2 rounded-full">
								{t("name")}
							</strong>
						</h2>
					</BlurFade>
					<BlurFade delay={0.6}>
						<Card className="w-full ml-8 mt-16 p-8 ">
							<SafeHTML
								className="text-end "
								content={t("history")}
							/>
						</Card>
					</BlurFade>
				</div>
			</div>
		</div>
	)
}
