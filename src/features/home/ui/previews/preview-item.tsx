import type { Preview } from "@/shared/types"
import { Button } from "@/shared/ui"
import { Stack } from "@/widgets"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { type FC } from "react"

interface PreviewItemProps {
	data: Preview
}

const PreviewItem: FC<PreviewItemProps> = ({ data: preview }) => {
	return (
		<div className={"flex max-lg:flex-col gap-10 p-1"}>
			<div className={"rounded-2xl lg:min-w-[500px] w-full overflow-hidden"}>
				<Image
					src={preview?.image}
					width={720}
					objectFit={"cover"}
					height={500}
					alt={""}
					className={
						"lg:min-w-[500px] max-h-[500px] w-full rounded-2xl object-cover"
					}
				/>
			</div>
			<div
				className={
					"flex flex-col items-start gap-6 justify-between lg:max-w-[26.813rem]"
				}
			>
				<Stack className={"flex-col gap-6"}>
					<h2 className={"text-2xl font-semibold"}>{preview?.title}</h2>
					<p className={"text-ellipsis overflow-hidden line-clamp-[10]"}>
						{preview?.description}
					</p>
				</Stack>
				<Button variant={"default-secondary"}>
					Подробнее <ChevronRight />
				</Button>
			</div>
		</div>
	)
}

export { PreviewItem }
