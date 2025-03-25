type ClassValue = string | undefined | null | boolean | ClassValue[]

export function cn(...classes: ClassValue[]): string {
	return classes.flat().filter(Boolean).join(" ")
}
