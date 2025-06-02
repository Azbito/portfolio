import Fastify from "~/assets/icons/fastify.png"

interface Technologies {
	id: number
	name: string
	icon: string
}

const TECHNOLOGIES_ASSETS_PATH = (lang: string): string => {
	return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang}/${lang}-original.svg`
}

export const technologies: Technologies[] = [
	{
		id: 0,
		name: "C++",
		icon: TECHNOLOGIES_ASSETS_PATH("cplusplus"),
	},
	{
		id: 3,
		name: "Typescript",
		icon: TECHNOLOGIES_ASSETS_PATH("typescript"),
	},
	{
		id: 423,
		name: "Assembly x86",
		icon: "https://assets.exercism.org/tracks/x86-64-assembly.svg",
	},
	{
		id: 4,
		name: "GoLang",
		icon: TECHNOLOGIES_ASSETS_PATH("go"),
	},
	{
		id: 5,
		name: "Javascript",
		icon: TECHNOLOGIES_ASSETS_PATH("javascript"),
	},
	{
		id: 542,
		name: "Lua",
		icon: TECHNOLOGIES_ASSETS_PATH("lua"),
	},
	{
		id: 543,
		name: "Python",
		icon: TECHNOLOGIES_ASSETS_PATH("python"),
	},
	{ id: 120, name: "C#", icon: TECHNOLOGIES_ASSETS_PATH("csharp") },
	{ id: 19, name: "Dart", icon: TECHNOLOGIES_ASSETS_PATH("dart") },
	{ id: 11, name: "Flutter", icon: TECHNOLOGIES_ASSETS_PATH("flutter") },
	{
		id: 6,
		name: "React",
		icon: TECHNOLOGIES_ASSETS_PATH("react"),
	},
	{
		id: 7,
		name: "NextJS",
		icon: TECHNOLOGIES_ASSETS_PATH("nextjs"),
	},
	{
		id: 25,
		name: "Remix",
		icon: "https://avatars.githubusercontent.com/u/64235328?s=200&v=4",
	},
	{
		id: 52,
		name: "VueJS",
		icon: TECHNOLOGIES_ASSETS_PATH("vuejs"),
	},
	{
		id: 8,
		name: "NodeJS",
		icon: TECHNOLOGIES_ASSETS_PATH("nodejs"),
	},
	{
		id: 9,
		name: "Fastify",
		icon: Fastify,
	},
	{
		id: 904,
		name: "FastAPI",
		icon: TECHNOLOGIES_ASSETS_PATH("fastapi"),
	},
	{
		id: 10,
		name: "AWS",
		icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
	},
	{
		id: 154,
		name: "Cloudflare",
		icon: TECHNOLOGIES_ASSETS_PATH("cloudflare"),
	},
	{
		id: 12,
		name: "Docker",
		icon: TECHNOLOGIES_ASSETS_PATH("docker"),
	},
	{
		id: 122,
		name: "Prisma",
		icon: TECHNOLOGIES_ASSETS_PATH("prisma"),
	},
	{
		id: 104,
		name: "PostgreSQL",
		icon: TECHNOLOGIES_ASSETS_PATH("postgresql"),
	},
	{
		id: 105,
		name: "SQLite",
		icon: TECHNOLOGIES_ASSETS_PATH("sqlite"),
	},
	{
		id: 104,
		name: "MySQL",
		icon: TECHNOLOGIES_ASSETS_PATH("mysql"),
	},
	{
		id: 102,
		name: "DynamoDB",
		icon: TECHNOLOGIES_ASSETS_PATH("dynamodb"),
	},
]
