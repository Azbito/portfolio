import { technologies } from "~/_data/technologies"
import { useTranslation } from "~/hooks/useTranslation"
import { cn } from "~/lib/utils"
import { Card } from "./ui/card"

export function Skills() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col gap-4 w-full">
			<h3 className="font-bold text-3xl mt-32">{t("skills")}</h3>

			<div className="grid grid-cols-[repeat(auto-fit,10rem)] gap-4 justify-start">
				{technologies.map((item) => (
					<Card
						key={item.id}
						className="shadow-lg w-40 h-40 flex items-center justify-center flex-col text-center rounded-xl transition-all hover:-translate-y-2"
					>
						<div className="w-12 h-12">
							<img
								src={item.icon}
								alt={item.name}
								className={cn(
									item.name === "Fastify" &&
										"brightness-0 dark:brightness-200",
									"rounded-md w-full h-full object-contain",
								)}
							/>
						</div>
						<p className="text-sm mt-2">{item.name}</p>
					</Card>
				))}
			</div>
		</div>
	)
}
