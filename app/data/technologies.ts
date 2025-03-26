import Fastify from "~/assets/icons/fastify.png"

interface Technologies {
	id: number
	name: string
	icon: string
}

const TECHNOLOGIES_ASSETS_PATH: string = "https://skillicons.dev/icons?i="

export const technologies: Technologies[] = [
	{
		id: 0,
		name: "C++",
		icon: `${TECHNOLOGIES_ASSETS_PATH}cpp`,
	},
	{
		id: 3,
		name: "Typescript",
		icon: `${TECHNOLOGIES_ASSETS_PATH}ts`,
	},
	{
		id: 423,
		name: "Assembly x86",
		icon: "https://assets.exercism.org/tracks/x86-64-assembly.svg",
	},
	{
		id: 4,
		name: "GoLang",
		icon: `${TECHNOLOGIES_ASSETS_PATH}go`,
	},
	{
		id: 5,
		name: "Javascript",
		icon: `${TECHNOLOGIES_ASSETS_PATH}js`,
	},
	{
		id: 542,
		name: "Lua",
		icon: `${TECHNOLOGIES_ASSETS_PATH}lua`,
	},
	{ id: 120, name: "C#", icon: `${TECHNOLOGIES_ASSETS_PATH}cs` },
	{ id: 19, name: "Dart", icon: `${TECHNOLOGIES_ASSETS_PATH}dart` },
	{ id: 11, name: "Flutter", icon: `${TECHNOLOGIES_ASSETS_PATH}flutter` },
	{
		id: 6,
		name: "React",
		icon: `${TECHNOLOGIES_ASSETS_PATH}react`,
	},
	{
		id: 7,
		name: "NextJS",
		icon: `${TECHNOLOGIES_ASSETS_PATH}nextjs`,
	},
	{
		id: 25,
		name: "Remix",
		icon: `${TECHNOLOGIES_ASSETS_PATH}remix`,
	},
	{
		id: 8,
		name: "NodeJS",
		icon: `${TECHNOLOGIES_ASSETS_PATH}nodejs`,
	},
	{
		id: 9,
		name: "Fastify",
		icon: Fastify,
	},
	{
		id: 34,
		name: ".NET",
		icon: `${TECHNOLOGIES_ASSETS_PATH}dotnet`,
	},
	{
		id: 10,
		name: "AWS",
		icon: `${TECHNOLOGIES_ASSETS_PATH}aws`,
	},
	{
		id: 154,
		name: "Cloudflare",
		icon: `${TECHNOLOGIES_ASSETS_PATH}cloudflare`,
	},
	{
		id: 12,
		name: "Docker",
		icon: `${TECHNOLOGIES_ASSETS_PATH}docker`,
	},
	{
		id: 104,
		name: "PostgreSQL",
		icon: `${TECHNOLOGIES_ASSETS_PATH}postgres`,
	},
]
