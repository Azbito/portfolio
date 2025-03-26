import { Link } from "@remix-run/react"
import { projects } from "~/data/projects"
import { useTranslation } from "~/hooks/useTranslation"
import { TranslationKeys } from "~/i18n"

import Padlock from "~/assets/icons/padlock.png"

export function Projects() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="uppercase mb-32 font-bold tracking-[.2rem] text-3xl mt-32">
				{t("projects")}
			</h1>
			<div className="w-[80%] flex flex-col gap-8 pb-16">
				{projects.map((project) => {
					return (
						<div
							key={project.key}
							className="border border-primary rounded-xl px-32 max-[1250px]:px-8 py-6 w-full flex flex-col items-center justify-center"
						>
							{!!project?.icon && (
								<img
									src={project.icon}
									alt={`${t("whoseLogo")}${project.title}`}
									width={150}
								/>
							)}
							<div className="flex items-center justify-center">
								<b className="text-2xl">{project.title} </b>
								{project.private && (
									<img
										className="translate-x-4"
										src={Padlock}
										alt={t("padlock")}
										width={15}
									/>
								)}
							</div>
							{project?.href && (
								<Link to={project.href}>
									<i className="text-blue-500">
										{project.href.includes("github")
											? t("sourceCode")
											: t("site")}
									</i>
								</Link>
							)}
							{project?.links &&
								project.links.map((link) => (
									<Link key={link.name} to={link.href}>
										<i className="text-blue-500">
											{link.name} - {t("sourceCode")}
										</i>
									</Link>
								))}
							<div className="flex flex-wrap mt-4 gap-4">
								{project.technologies.map((tech, index) => (
									<div
										className="bg-foreground border border-primary px-4 py-1 rounded-full"
										key={index}
									>
										<p>{tech}</p>
									</div>
								))}
							</div>
							<div
								className="py-6"
								dangerouslySetInnerHTML={{
									__html: t(project.key as TranslationKeys),
								}}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
