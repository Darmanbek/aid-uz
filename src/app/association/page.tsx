import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Ассоцияция"
}

export default function Page() {
	return (
		<section>
			<Container>
				<div>
					<h1>Association</h1>
				</div>
			</Container>
		</section>
	)
}
