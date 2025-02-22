import { Stack } from "@/widgets"
import { AboutItem } from "@/widgets/about"
import { type FC } from "react"

const text =
	"Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. Также как базовый вектор развития обеспечивает актуальность распределения внутренних резервов и ресурсов. А ещё интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов."

const items = [
	{
		title: "НАША МИССИЯ",
		type: "h1" as const,
		content: text
	},
	{
		title: "НАШЕ ВИДЕНИЕ",
		type: "h1" as const,
		content: text
	},
	{
		title: "НАШЕ ВИДЕНИЕ",
		type: "h1" as const,
		items: [
			{
				title: "Сотрудничество",
				type: "h2" as const,
				content: text
			},
			{
				title: "Предпримчивость",
				type: "h2" as const,
				content: text
			},
			{
				title: "Профессионализм",
				type: "h2" as const,
				content: text
			},
			{
				title: "Уважение",
				type: "h2" as const,
				content: text
			},
			{
				title: "Предпримчивость",
				type: "h2" as const,
				content: text
			}
		]
	}
]

const AssociationAbout: FC = () => {
	return (
		<Stack className={"flex-col gap-8"}>
			{items.map((item, index) => (
				<AboutItem title={item.title} type={item.type} key={index}>
					{item?.items
						? item.items.map((subItem, index) => (
								<AboutItem
									title={subItem.title}
									type={subItem.type}
									key={index}
								>
									{subItem.content}
								</AboutItem>
							))
						: item.content}
				</AboutItem>
			))}
		</Stack>
	)
}

export { AssociationAbout }
