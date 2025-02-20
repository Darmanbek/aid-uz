import { Container } from "@/widgets"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Page"
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
