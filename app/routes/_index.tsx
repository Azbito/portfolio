import type { MetaFunction } from "@remix-run/node"
import { ProfessionalExperience } from "~/components/experience"
import { Intro } from "~/components/intro"
import { translations } from "~/i18n"

export const meta: MetaFunction = () => {
	return [
		{ title: translations.pt.homeMetadataTitle },
		{ name: translations.pt.homeMetadataDescription },
	]
}

export default function Index() {
	return (
		<div className="flex flex-col items-center p-64 min-h-screen">
			<Intro />
			<ProfessionalExperience />
		</div>
	)
}
