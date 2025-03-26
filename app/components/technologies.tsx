import { technologies } from "~/data/technologies"
import { useTranslation } from "~/hooks/useTranslation"

export function Technologies() {
	const { t } = useTranslation()

	return (
		<div className="mt-16 flex flex-col items-center justify-center">
			<h1 className="uppercase mb-32 font-bold tracking-[.2rem] text-3xl mt-32">
				{t("technologies")}
			</h1>
			<div className="flex-wrap flex items-center justify-center gap-5 border-[1px] p-16 border-primary rounded-xl mt-16 w-[80%]">
				{technologies.map((tech) => (
					<div
						className="bg-foreground flex items-center justify-center flex-col py-6 w-[10rem]
                        transition-transform hover:translate-y-[-5px] rounded-lg shadow-xl"
					>
						<img
							src={tech.icon}
							alt={`${t("whoseLogo")}${tech.name}`}
							width={50}
							height={50}
						/>
						<p className="mt-4">{tech.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
