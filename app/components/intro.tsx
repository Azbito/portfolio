import Me from "~/assets/photos/me/2.png"
import { useTranslation } from "~/hooks/useTranslation"
import { Avatar } from "~/components/avatar"
import { BlurFade } from "./blur-fade"
import { useMediaQuery } from "~/hooks/useMediaQuery"
import { Card } from "./ui/card"
import { SafeHTML } from "./safe-html"
import { cn } from "~/lib/utils"

export function Intro() {
	const { t } = useTranslation()
	const mobile = useMediaQuery("(max-width: 1000px)")

	return (
		<div className="flex gap-4 w-full max-[1000px]:flex-col max-w-screen-xl">
			{!mobile && (
				<BlurFade delay={0.4}>
					<Avatar src={Me} />
				</BlurFade>
			)}

			<div className="flex-1 min-w-0 flex items-start justify-between">
				<div className="flex flex-col w-full min-w-0">
					{!mobile && (
						<BlurFade delay={0.4}>
							<h1 className="text-5xl w-full">{t("role")}</h1>
							<h2 className="mt-4 text-lg w-full">
								{t("iAm")}{" "}
								<strong className="bg-brand-primary px-2 py-2 rounded-full inline-block">
									{t("name")}
								</strong>
							</h2>
						</BlurFade>
					)}
					{mobile && (
						<div className="flex flex-col w-full min-w-0 ">
							<BlurFade
								className="flex w-full gap-4 max-[570px]:flex-col"
								delay={0.4}
							>
								<Avatar src={Me} />
								<div className="flex flex-col flex-1 min-w-0">
									<h1 className="text-4xl max-[700px]:text-2xl">
										{t("role")}
									</h1>
									<h2 className="mt-4 text-lg">
										{t("iAm")}{" "}
										<strong className="bg-brand-primary px-2 py-2 rounded-full inline-block">
											{t("name")}
										</strong>
									</h2>
								</div>
							</BlurFade>
						</div>
					)}
					<BlurFade delay={0.6}>
						<h3 className="text-3xl font-bold mt-4">
							{t("about")}
						</h3>
						<Card className="w-full mt-2 p-8 ">
							<SafeHTML
								className={cn(
									mobile ? "text-start" : "text-end",
								)}
								content={t("history")}
							/>
						</Card>
					</BlurFade>
				</div>
			</div>
		</div>
	)
}
