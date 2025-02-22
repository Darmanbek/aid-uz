import type { LinkItem } from "@/shared/types"
import { NavLink } from "@/shared/ui"
import type { FC, PropsWithChildren } from "react"

interface LinksContainerProps {
	items: LinkItem[]
}

const LinksContainer: FC<PropsWithChildren<LinksContainerProps>> = ({
	items = [],
	children
}) => {
	return (
		<div className={"flex gap-20 justify-between pb-8"}>
			<div className={"flex flex-col items-start min-w-52 gap-3"}>
				{items.map((item, index) => (
					<NavLink href={item.href} key={index}>
						{item.title}
					</NavLink>
				))}
			</div>
			<div className={"w-full"}>{children}</div>
		</div>
	)
}

export { LinksContainer }
