import type { Blog } from "@/shared/types"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/shared/ui"
import Image from "next/image"
import { type FC } from "react"

interface BlogCardProps {
	data: Blog
}

const BlogCard: FC<BlogCardProps> = ({ data: blog }) => {
	return (
		<Card className={"overflow-hidden"}>
			<Image
				src={blog?.image}
				width={390}
				height={280}
				alt={""}
				className={"w-full"}
			/>
			<CardHeader>
				<CardTitle className={"text-xl"}>{blog.title}</CardTitle>
				<CardDescription>{blog.created_at}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className={"overflow-hidden text-ellipsis line-clamp-[8]"}>
					{blog.description}
				</p>
			</CardContent>
			{/*<CardFooter></CardFooter>*/}
		</Card>
	)
}

export { BlogCard }
