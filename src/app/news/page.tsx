import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Новости"
}

export default function Page() {
	return (
		<section>
			<Container>
				<div>
					<h1>News</h1>
				</div>
			</Container>
		</section>
	)
}
