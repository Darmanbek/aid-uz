import { cn } from "@/shared/lib/utils"
import { Stack } from "@/widgets"
import type { FC, PropsWithChildren } from "react"

interface AboutItemProps {
	title: string
	type: "h1" | "h2"
	titleClassName?: string
}

const AboutItem: FC<PropsWithChildren<AboutItemProps>> = ({
	title,
	type,
	titleClassName,
	children
}) => {
	const isTitle = type === "h1"

	return (
		<Stack className={"flex-col"}>
			{isTitle ? (
				<h1 className={cn("uppercase font-bold text-2xl", titleClassName)}>
					{title}
				</h1>
			) : (
				<h2 className={cn("font-semibold text-2xl", titleClassName)}>
					{title}
				</h2>
			)}
			<Stack className={"text-2xl flex-col text-justify"}>{children}</Stack>
		</Stack>
	)
}

export { AboutItem }
