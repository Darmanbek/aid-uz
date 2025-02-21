import type { Blog } from "@/shared/types"
import { type FC } from "react"
import { BlogCard } from "./blog-card"

interface BlogListProps {
	data: Blog[]
}

const BlogList: FC<BlogListProps> = ({ data: blogs }) => {
	return (
		<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"}>
			{blogs.map((blog, index) => (
				<BlogCard data={blog} key={index} />
			))}
		</div>
	)
}

export { BlogList }
