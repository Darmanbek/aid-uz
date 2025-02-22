import type { Blog } from "@/shared/types"
import { Button, CardDescription, CardTitle, Separator } from "@/shared/ui"
import { Stack } from "@/widgets"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { type FC } from "react"

interface BlogListItemProps {
	data: Blog
}

const BlogListItem: FC<BlogListItemProps> = ({ data: blog }) => {
	return (
		<div className={"flex gap-8"}>
			<div
				className={
					"relative rounded-2xl overflow-hidden min-w-[290px] min-h-full grow"
				}
			>
				<Image
					fill={true}
					src={blog.image}
					alt={""}
					className={"object-cover w-full h-full"}
				/>
			</div>
			<div>
				<Stack className={"gap-3 flex-col"}>
					<CardTitle className={"text-2xl font-bold line-clamp-1"}>
						{blog.title}
					</CardTitle>
					<CardDescription className={"text-xl line-clamp-1"}>
						{blog.created_at}
					</CardDescription>
				</Stack>
				<Separator className={"my-5"} />
				<Stack className={"gap-3 flex-col items-start"}>
					<p className={"text-xl text-ellipsis text-justify line-clamp-6"}>
						{blog.description}
					</p>
					<Button variant={"default-secondary"}>
						Подробнее <ChevronRight />
					</Button>
				</Stack>
			</div>
		</div>
	)
}

export { BlogListItem }
