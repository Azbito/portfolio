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
}: {
	title: string
	technologies: string[]
	description: string
	isPrivate: boolean
}) {
	const { t } = useTranslation()

	return (
		<Card className="px-8 w-100 h-full flex flex-col items-stretch justify-between transition-all cursor-default hover:scale-105">
			<div>
				<h4 className="font-bold text-xl">{title}</h4>
				{description.includes("<") ? (
					<SafeHTML content={description} />
				) : (
					<p>{description}</p>
				)}
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex gap-2 flex-wrap">
					{technologies.map((item) => (
						<Badge key={item}>{item}</Badge>
					))}
				</div>
				{!isPrivate && (
					<Button>
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
			<div className="flex flex-wrap items-stretch justify-start gap-4">
				{projects.map((item) => (
					<BlurFade key={item.key}>
						<ProjectCard
							title={item.title}
							description={t(item.key as TranslationKeys)}
							technologies={item.technologies}
							isPrivate={item.private}
						/>
					</BlurFade>
				))}
			</div>
		</div>
	)
}
