import { Container } from "@/widgets"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Контакты"
}

export default function Page() {
	return (
		<section>
			<Container>
				<div>
					<h1>Contacts</h1>
				</div>
			</Container>
		</section>
	)
}
