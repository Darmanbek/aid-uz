import { Container } from "@/widgets"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Документы"
}

const Page: NextPage = () => {
	return (
		<section>
			<Container>
				<div>
					<h1>Documents</h1>
				</div>
			</Container>
		</section>
	)
}

export default Page
