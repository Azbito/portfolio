import { technologies } from "~/_data/technologies"
import { useTranslation } from "~/hooks/useTranslation"
import { cn } from "~/lib/utils"

export function Skills() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col gap-4">
			<h3 className="font-bold text-3xl mt-32">{t("skills")}</h3>
			<div className="flex flex-wrap gap-4">
				{technologies.map((item) => (
					<div
						key={item.id}
						className="shadow-lg w-30 h-30 flex items-center justify-center flex-col text-center rounded-xl transition-all hover:-translate-y-4"
					>
						<div className="w-15 h-15">
							<img
								src={item.icon}
								alt=""
								className={cn(
									item.name === "Fastify" &&
										"brightness-0 dark:brightness-200",
									"rounded-md",
								)}
							/>
						</div>
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
