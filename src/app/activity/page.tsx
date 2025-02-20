import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Деятельность"
}

export default function Page() {
	return (
		<section>
			<Container>
				<div>
					<h1>Activity</h1>
				</div>
			</Container>
		</section>
	)
}
