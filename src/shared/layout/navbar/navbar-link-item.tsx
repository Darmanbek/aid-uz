import { cn } from "@/shared/lib/utils"
import Link from "next/link"
import type { FC, PropsWithChildren } from "react"

interface NavbarLinkItemProps {
	className?: string
	href: string
}

const NavbarLinkItem: FC<PropsWithChildren<NavbarLinkItemProps>> = ({
	children,
	className,
	href
}) => {
	return (
		<>
			<Link
				href={href}
				className={cn(
					"text-2xl font-normal border-transparent border-b-4 pb-1 hover:text-primary-secondary hover:border-primary-secondary [&.active]:border-primary-secondary",
					className
				)}
			>
				{children}
			</Link>
		</>
	)
}

export { NavbarLinkItem }
