import type { Config } from "tailwindcss"

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	safelist: ["bg-github", "bg-linkedin", "bg-email"],
	theme: {
		extend: {
			colors: {
				neon: "#ff00ff",
				primary: "#ff01bb",
				background: "#121212",
				foreground: "#151515",
				github: "#273436",
				linkedin: "#0077b5",
				email: "#6a4c9c",
			},
			fontFamily: {
				jetbrains: ['"JetBrains Mono"', "monospace"],
			},
		},
	},
	plugins: [],
} satisfies Config
