import { projects } from "~/_data/projects"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { GitBranch } from "lucide-react"
import { useTranslation } from "~/hooks/useTranslation"
import { Button } from "./ui/button"
import { BlurFade } from "./blur-fade"
import { TranslationKeys } from "~/i18n"
import { SafeHTML } from "./safe-html"

function ProjectCard({
	title,
	description,
	technologies,
	isPrivate,
	link,
}: {
	title: string
	technologies: string[]
	description: string
	isPrivate: boolean
	link: string
}) {
	const { t } = useTranslation()

	return (
		<Card className="h-full flex flex-col justify-between px-8 transition-all cursor-default hover:scale-105">
			<div>
				<h4 className="font-bold text-xl">{title}</h4>
				{description.includes("<") ? (
					<SafeHTML content={description} />
				) : (
					<p>{description}</p>
				)}
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="flex gap-2 flex-wrap">
					{technologies.map((item) => (
						<Badge key={item}>{item}</Badge>
					))}
				</div>
				{!isPrivate && (
					<Button onClick={() => open(link)}>
						<GitBranch />
						{t("sourceCode")}
					</Button>
				)}
			</div>
		</Card>
	)
}

export function Projects() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col">
			<BlurFade>
				<h3 className="font-bold text-3xl mt-32 mb-16">
					{t("projects")}
				</h3>
			</BlurFade>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((item) => (
					<BlurFade key={item.key}>
						<ProjectCard
							title={item.title}
							description={t(item.key as TranslationKeys)}
							technologies={item.technologies}
							isPrivate={item.private}
							link={item?.href || ""}
						/>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
