interface LinksProps {
	id: number
	name: string
	color: string
	href?: string
	content?: string
}

export const links: LinksProps[] = [
	{
		id: 0,
		name: "GitHub",
		color: "github",
		href: "https://github.com/Azbito",
	},
	{
		id: 1,
		name: "LinkedIn",
		color: "linkedin",
		href: "https://www.linkedin.com/in/dev-thiago-r/",
	},
	{
		id: 2,
		name: "Email",
		color: "email",
		content: "azbitomsg@proton.me",
	},
]
