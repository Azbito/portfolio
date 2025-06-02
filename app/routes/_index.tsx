import type { MetaFunction } from "@remix-run/node"
import { ProfessionalExperience } from "~/components/experience"
import { Intro } from "~/components/intro"
import { Projects } from "~/components/projects"
import { Skills } from "~/components/skills"
import { translations } from "~/i18n"

export const meta: MetaFunction = () => {
	return [
		{ title: translations.pt.homeMetadataTitle },
		{ name: translations.pt.homeMetadataDescription },
	]
}

export default function Index() {
	return (
		<div className="flex flex-col items-center p-64 max-w-screen max-[1380px]:p-32 max-[1120px]:p-16 max-[700px]:p-4 min-h-screen">
			<Intro />
			<ProfessionalExperience />
			<Skills />
			<Projects />
		</div>
	)
}
