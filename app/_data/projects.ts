interface HrefProps {
	name: string
	href: string
}

export interface ProjectsProps {
	title: string
	key: string
	technologies: string[]
	href?: string
	links?: HrefProps[]
	private: boolean
}

export const projects: ProjectsProps[] = [
	{
		title: "NES Emulator",
		key: "project-nes",
		technologies: ["C++", "CPU6502", "JIT"],
		private: false,
		href: "https://github.com/Azbito/nes-emulator",
	},
	{
		title: "bood pdv",
		key: "project-bood-pdv",
		technologies: [
			"Javascript",
			"ElectronJS",
			"AWS Lambda",
			"AWS Gateway",
			"AWS S3",
		],
		private: true,
	},
	{
		title: "Hardware Pulse CLI",
		key: "project-hardware",
		private: false,
		technologies: ["GoLang"],
		href: "https://github.com/Azbito/hardware-pulse-cli",
	},
	{
		title: "ANS Data Processor",
		key: "project-ans",
		private: false,
		technologies: [
			"Docker",
			"Python",
			"VueJS",
			"Cloudflare R2",
			"PostgreSQL",
			"FastAPI",
		],
		href: "https://github.com/Azbito/ans-data-processor",
	},
	{
		title: "Metropole Garage",
		key: "project-metropole",
		private: false,
		technologies: [
			"Docker",
			"MySQL",
			"Typescript",
			"Lua",
			"FiveM",
			"ReactJS",
		],
		href: "https://github.com/Azbito/metropole-garage",
	},
	{
		title: "Chaosify Editor",
		key: "project-chaosify-editor",
		technologies: ["C++"],
		private: true,
	},
	{
		title: "Chaosify",
		key: "project-chaosify",
		technologies: ["C++", "Assembly x86", "SHA-01"],
		private: true,
	},
	{
		title: "Babama's Book",
		key: "project-babama",
		href: "https://babama-book.vercel.app/",
		private: true,
		technologies: ["Typescript", "NextJS", "Cloudflare R2"],
	},
	{
		title: "FindGyms",
		key: "project-gym",
		private: false,
		href: "https://github.com/Azbito/nodejs-solid",
		technologies: ["Typescript", "Prisma", "NodeJS", "SOLID"],
	},

	{
		title: "Desafio Pigz",
		key: "project-pigz",
		technologies: ["Typescript", "React Native", "Google Firebase"],
		private: false,
		href: "https://github.com/Azbito/desafio-frontend-mobile",
	},
]
