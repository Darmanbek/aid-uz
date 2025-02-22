"use client"

import { cn } from "@/shared/lib/utils"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentProps, forwardRef } from "react"

export type NavLinkProps = LinkProps &
	Omit<ComponentProps<"a">, keyof LinkProps>

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ className, href, ...rest }, ref) => {
		const pathname = usePathname()

		const url = typeof href === "string" ? href : href.pathname
		return (
			<Link
				ref={ref}
				className={cn(
					"text-2xl font-normal border-transparent border-b-4 pb-1 hover:text-primary-secondary hover:border-primary-secondary [&.active]:border-primary-secondary",
					{
						"border-primary-secondary text-primary-secondary font-medium":
							url === pathname
					},
					className
				)}
				href={href}
				{...rest}
			/>
		)
	}
)
NavLink.displayName = "NavLink"

export { NavLink }
