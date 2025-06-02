export const formatMonthYear = (dateStr: string) =>
	new Intl.DateTimeFormat("pt-BR", {
		year: "numeric",
		month: "short",
		timeZone: "UTC",
	}).format(new Date(dateStr))
