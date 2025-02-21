import { blogsData } from "@/shared/data"
import { Button } from "@/shared/ui"
import { BlogList } from "@/widgets"
import { ChevronRight } from "lucide-react"
import { type FC } from "react"

const HomeNews: FC = () => {
	return (
		<div className={"py-10 border-b-4 border-primary px-3"}>
			<h1 className={"text-3xl font-bold ml-10 mb-10"}>Новости</h1>
			<BlogList data={blogsData} />
			<div className={"mt-5 flex justify-center"}>
				<Button variant={"default-secondary"}>
					Все новости <ChevronRight />
				</Button>
			</div>
		</div>
	)
}

export { HomeNews }
