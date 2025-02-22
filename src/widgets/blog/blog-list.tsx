import type { Blog } from "@/shared/types"
import { Separator } from "@/shared/ui"
import { BlogListItem } from "@/widgets/blog/blog-list-item"
import { type FC } from "react"

interface BlogListProps {
	data: Blog[]
}

const BlogList: FC<BlogListProps> = ({ data: blogs }) => {
	const items = blogs.flatMap((el) => [undefined, el]).splice(1)

	return (
		<div>
			{items.map((blog, index) =>
				blog ? (
					<BlogListItem data={blog} key={index} />
				) : (
					<Separator key={index} />
				)
			)}
		</div>
	)
}

export { BlogList }
