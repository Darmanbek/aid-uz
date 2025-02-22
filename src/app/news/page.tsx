import { blogsData } from "@/shared/data"
import { Container } from "@/widgets"
import { BlogCardList } from "@/widgets/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Новости"
}

export default function Page() {
	return (
		<section className={"py-4 pb-12"}>
			<Container>
				<div>
					<BlogCardList data={[...blogsData, ...blogsData, ...blogsData]} />
				</div>
			</Container>
		</section>
	)
}
