import type { MetaFunction } from "@remix-run/node"
import { HomeHeader } from "~/components/home-header"
import { translations } from "~/i18n"

export const meta: MetaFunction = () => {
	return [
		{ title: translations.pt.homeMetadataTitle },
		{ name: translations.pt.homeMetadataDescription },
	]
}

export default function Index() {
	return (
		<div className="flex h-screen">
			<HomeHeader />
		</div>
	)
}
