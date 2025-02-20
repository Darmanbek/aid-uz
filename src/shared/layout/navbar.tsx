import { navbarData } from "@/shared/data/navbar.data"
import { NavbarLinkItem } from "@/shared/layout/navbar/navbar-link-item"
import { Container } from "@/widgets"
import { type FC } from "react"
import { Search } from "./navbar/search"

const Navbar: FC = () => {
	return (
		<section className={"max-md:hidden"}>
			<Container>
				<div className={"py-8 gap-5 flex justify-between"}>
					<ul className={"flex gap-5 justify-around flex-wrap w-full"}>
						{navbarData.map((item, index) => (
							<li key={index}>
								<NavbarLinkItem href={item.path}>{item.title}</NavbarLinkItem>
							</li>
						))}
					</ul>
					<Search />
				</div>
			</Container>
		</section>
	)
}

export { Navbar }
