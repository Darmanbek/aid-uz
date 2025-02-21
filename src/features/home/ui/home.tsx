import { Container } from "@/widgets"
import { type FC } from "react"
import { HomeAssociation } from "./association/home-association"
import { HomeNews } from "./news/home-news"
import { HomePreviews } from "./previews/home-previews"

const Home: FC = () => {
	return (
		<section>
			<Container>
				<div>
					<HomePreviews />
					<HomeNews />
					<HomeAssociation />
				</div>
			</Container>
		</section>
	)
}

export { Home }
