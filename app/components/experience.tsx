import { useTranslation } from "~/hooks/useTranslation"
import { SafeHTML } from "./safe-html"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"
import { TranslationKeys } from "~/i18n"
import { experiences, ExperiencesProps } from "~/_data/experience"
import { cn } from "~/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"
import { BlurFade } from "./blur-fade"
import { formatMonthYear } from "~/utils/date"

function ProfessionalCard({
	title,
	description,
	technologies,
	icon,
	links,
	role,
	startTime,
	endTime,
}: ExperiencesProps & { description: string }) {
	const [expanded, setExpanded] = useState<boolean>(false)
	const { t } = useTranslation()

	return (
		<button
			onClick={() => setExpanded(!expanded)}
			className={cn("flex flex-col w-full space-y-4")}
		>
			<div className="flex items-center gap-4 w-full">
				<div
					className={cn(
						"shadow-md overflow-hidden w-18 h-18 rounded-full flex items-center justify-center",
						!title?.includes("bood")
							? "dark:bg-white bg-black"
							: "bg-white",
					)}
				>
					{typeof icon === "string" ? (
						<img
							src={icon}
							alt=""
							className={cn(
								title.includes("GF") &&
									"brightness-200 dark:brightness-0",
								"w-16 h-auto",
							)}
						/>
					) : (
						<div className="translate-x-1 translate-y-1">
							{icon}
						</div>
					)}
				</div>
				<div className="flex items-center justify-center gap-4">
					<div className="flex flex-col items-start justify-start">
						<h3 className="font-bold text-xl">{title}</h3>
						<>
							{formatMonthYear(startTime)} –{" "}
							{endTime === "now"
								? t("now" as TranslationKeys)
								: formatMonthYear(endTime)}
						</>

						<p>{role}</p>
					</div>
					<ArrowDown
						className={cn(
							"transition-all cursor-pointer hover:-translate-y-2",
							expanded ? "rotate-180" : "rotate-0",
						)}
					/>
				</div>
			</div>

			<motion.div
				className="flex flex-col gap-4"
				initial={{ opacity: 0, height: 0 }}
				animate={{
					opacity: expanded ? 1 : 0,
					height: expanded ? "auto" : 0,
				}}
				transition={{
					duration: expanded ? 0.7 : 0.3,
					ease: [0.16, 1, 0.3, 1],
				}}
			>
				<SafeHTML className="text-start" content={description} />
				<div className="flex flex-wrap gap-2">
					{technologies.map((item) => (
						<Badge key={item}>{item}</Badge>
					))}
				</div>
				<div className="flex gap-2 flex-wrap">
					{links.map((item) => (
						<Button
							key={item.url}
							onClick={(e) => {
								e.stopPropagation()
								window.open(item.url, "__blank")
							}}
							size="sm"
							variant="secondary"
							className="cursor-pointer"
						>
							{item.icon}
							{item.label}
						</Button>
					))}
				</div>
			</motion.div>
		</button>
	)
}

export function ProfessionalExperience() {
	const { t } = useTranslation()

	const orderedExperiences = [...experiences].sort((a, b) => {
		const aTime =
			a.endTime === "now" ? Date.now() : new Date(a.endTime).getTime()
		const bTime =
			b.endTime === "now" ? Date.now() : new Date(b.endTime).getTime()
		return bTime - aTime
	})

	return (
		<div className="flex flex-col gap-16 w-full mt-32">
			<BlurFade delay={0.6}>
				<h3 className="font-bold text-3xl">
					{t("professionalExperience")}
				</h3>
			</BlurFade>
			{orderedExperiences.map((item, index) => (
				<BlurFade key={item.key} delay={0.8 + index / 3}>
					<ProfessionalCard
						key={item.key}
						description={t(item.key as TranslationKeys)}
						role={t(item.role as TranslationKeys)}
						title={item.title}
						technologies={item.technologies}
						icon={item.icon}
						links={item.links}
						endTime={item.endTime}
						startTime={item.startTime}
					/>
				</BlurFade>
			))}
		</div>
	)
}
