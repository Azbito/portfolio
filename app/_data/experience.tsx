import GFChaos from "~/assets/icons/gfchaos.webp"
import bood from "~/assets/icons/bood.png"
import { Earth, Linkedin } from "lucide-react"
import { ReactElement, ReactNode } from "react"

interface LinksProps {
	url: string
	icon: ReactElement
	label: string
}

export interface ExperiencesProps {
	icon: string | ReactNode
	title: string
	role: string
	startTime: string
	endTime: string
	key: string
	technologies: string[]
	links: LinksProps[]
}

export const experiences: ExperiencesProps[] = [
	{
		key: "project-metropole-work",
		icon: (
			<svg
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 60 40"
				className="w-10 h-10 flex items-center justify-center"
			>
				<path
					fill="#BBDE1A"
					d="M50.167 17.96v-5.851l-.955-.479c-1.304-.652-6.489-3.244-7.693-3.848L34.6 11.243V4.324C32.73 3.39 27.795.92 25.95 0l-8.651 4.324-1.73.866 1.73 1.069v4.984l-6.92-3.46-8.65 4.323L0 12.972l1.73 1.069v5.85l1.728.866v-7.58l6.92-3.46v14.5l8.65 4.325 1.729-.866-1.73-1.069V5.393l6.92-3.461V32l10.38-5.19-1.73-1.069V13.175l6.92-3.46v14.5l10.38-5.19-1.73-1.069z"
				/>
			</svg>
		),
		title: "Metrópole",
		role: "fullstack-developer",
		startTime: "2025-05-20T00:00:00.000Z",
		endTime: "now",
		technologies: [
			"Typescript",
			"ReactJS",
			"FiveM",
			"C#",
			".NET",
			"Docker",
			"Lua",
		],
		links: [
			{
				url: "https://metropole.gg/",
				icon: <Earth className="mr-1 h-4 w-4" />,
				label: "Website",
			},
		],
	},

	{
		icon: GFChaos,
		title: "GF Chaos",
		key: "project-gfchaos",
		role: "software-engineer",
		startTime: "2023-11-01T00:00:00.000Z",
		endTime: "2024-03-01T00:00:00.000Z",
		technologies: [
			"Typescript",
			"NextJS",
			"ElectronJS",
			"C++",
			"Assembly x86",
			"AWS",
			"Cloudflare",
			"Docker",
		],
		links: [
			{
				url: "https://gfchaos.com",
				icon: <Earth className="mr-1 h-4 w-4" />,
				label: "Website",
			},
		],
	},
	{
		icon: bood,
		title: "bood inovações",
		key: "project-bood",
		role: "fullstack-developer",
		startTime: "2024-05-01T00:00:00.000Z",
		endTime: "2025-05-01T00:00:00.000Z",
		technologies: [
			"Typescript",
			"Javascript",
			"NextJS",
			"ElectronJS",
			"ReactJS",
			"React Native",
			"AWS",
			"SEO",
		],
		links: [
			{
				label: "Website",
				url: "https://www.bood.com.br",
				icon: <Earth className="mr-1 h-4 w-4" />,
			},
			{
				label: "LinkedIn",
				url: "https://www.linkedin.com/company/bood-inova%C3%A7%C3%B5es/",
				icon: <Linkedin className="mr-1 h-4 w-4" />,
			},
		],
	},
]
