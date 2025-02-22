import { Stack } from "@/widgets"
import { AboutItem } from "@/widgets/about"
import { type FC } from "react"

const charter = {
	title: "Устав №",
	content:
		"Имеется спорная точка зрения, гласящая примерно следующее: непосредственные участники технического прогресса призывают нас к новым свершениям, которые, в свою очередь, должны быть объединены в целые кластеры себе подобных. Также как базовый вектор развития обеспечивает актуальность распределения внутренних резервов и ресурсов. А ещё интерактивные прототипы, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов."
}

const AssociationCharter: FC = () => {
	return (
		<Stack className={"flex-col gap-8"}>
			{Array.from({ length: 6 }).map((_, index) => (
				<AboutItem
					title={`${charter.title}${index + 1}`}
					type={"h1"}
					key={index}
					titleClassName={"text-primary"}
				>
					{charter.content}
				</AboutItem>
			))}
		</Stack>
	)
}

export { AssociationCharter }
