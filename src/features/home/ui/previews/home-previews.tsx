import { Container } from "@/widgets"
import { type FC } from "react"
import { PreviewCarousel } from "./preview-carousel"

const HomePreviews: FC = () => {
	return (
		<section>
			<Container>
				<div>
					<PreviewCarousel />
				</div>
			</Container>
		</section>
	)
}

export { HomePreviews }
