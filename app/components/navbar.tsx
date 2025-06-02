import { Github, Linkedin } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { ModeToggle } from "./theme-toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { useTranslation } from "~/hooks/useTranslation"

export function Dock() {
	const { t } = useTranslation()

	return (
		<nav
			className="fixed
      left-1/2 bottom-4 -translate-x-1/2
      flex flex-row items-center space-x-6
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md
      rounded-full p-2 shadow-lg
      h-fit

      md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0
      md:flex-col md:space-x-0 md:space-y-6
  "
		>
			<Tooltip>
				<TooltipTrigger asChild>
					<div>
						<LanguageToggle />
					</div>
				</TooltipTrigger>
				<TooltipContent>{t("changeLanguage")}</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<div>
						<ModeToggle />
					</div>
				</TooltipTrigger>
				<TooltipContent>{t("changeTheme")}</TooltipContent>
			</Tooltip>

			<div className="border-t border-gray-300 dark:border-gray-700 w-full"></div>

			<Tooltip>
				<TooltipTrigger asChild>
					<a
						href="https://www.linkedin.com/in/dev-thiago-r/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
						aria-label="LinkedIn"
					>
						<Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
					</a>
				</TooltipTrigger>
				<TooltipContent>LinkedIn</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<a
						href="https://github.com/azbito"
						target="_blank"
						rel="noopener noreferrer"
						className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
						aria-label="GitHub"
					>
						<Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
					</a>
				</TooltipTrigger>
				<TooltipContent>GitHub</TooltipContent>
			</Tooltip>
		</nav>
	)
}
