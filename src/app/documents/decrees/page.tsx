import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Page"
}

const Page: NextPage = () => {
	return (
		<section>
			<h1>Page</h1>
		</section>
	)
}

export default Page
