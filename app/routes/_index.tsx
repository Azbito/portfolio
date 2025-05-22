import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { MetaFunction } from "@remix-run/node"
import { HomeHeader } from "~/components/home-header"
import { Projects } from "~/components/projects"
import { Technologies } from "~/components/technologies"
import { translations } from "~/i18n"
import { useMediaQuery } from "~/hooks/useMediaQuery"

export const meta: MetaFunction = () => {
	return [
		{ title: translations.pt.homeMetadataTitle },
		{ name: translations.pt.homeMetadataDescription },
	]
}

export default function Index() {
	const renderOnDesktop = useMediaQuery("(max-width: 1250px)")

	const [technologiesInView, setTechnologiesInView] = useState(false)
	const [projectsInView, setProjectsInView] = useState(false)
	const [threshold, setThreshold] = useState(0.3)

	const technologiesRef = useRef(null)
	const projectsRef = useRef(null)

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				const thresholdHandler = () => {
					if (window.scrollY >= 90 && window.scrollY < 945) return 0.3
					if (window.scrollY >= 945) return 0.1
					return 0
				}

				if (thresholdHandler() > 0) {
					setThreshold(thresholdHandler())
				}
			}

			handleScroll()

			window.addEventListener("scroll", handleScroll)

			return () => {
				window.removeEventListener("scroll", handleScroll)
			}
		}
	}, [])

	useEffect(() => {
		const options = {
			threshold: threshold,
		}

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.target === technologiesRef.current) {
					setTechnologiesInView(entry.isIntersecting)
				}
				if (entry.target === projectsRef.current) {
					setProjectsInView(entry.isIntersecting)
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersection, options)

		if (technologiesRef.current) observer.observe(technologiesRef.current)
		if (projectsRef.current) observer.observe(projectsRef.current)

		return () => {
			if (technologiesRef.current)
				observer.unobserve(technologiesRef.current)
			if (projectsRef.current) observer.unobserve(projectsRef.current)
		}
	}, [threshold])

	return (
		<div className="flex flex-col min-h-screen">
      <div className="w-full flex items-center justify-center mt-32">
        <HomeHeader />
      </div>

			<motion.div
				ref={technologiesRef}
				initial={{ opacity: 0 }}
				animate={{ opacity: technologiesInView ? 1 : 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<Technologies />
			</motion.div>

			{!renderOnDesktop ? (
				<motion.div
					ref={projectsRef}
					initial={{ opacity: 0 }}
					animate={{ opacity: projectsInView ? 1 : 0 }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					<Projects />
				</motion.div>
			) : (
				<Projects />
			)}
		</div>
	)
}
