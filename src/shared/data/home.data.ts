import type { Blog, Preview } from "@/shared/types"

const preview = {
	image: "/home/preview.jpg",
	title: "Модели социальной политики в сфере трудоустройства инвалидов.",
	description:
		"Расширение доступа людей с инвалидностью к образованию и трудоустройству имеет огромный экономический эффект, поскольку их человеческий капитал преобразуется в источник будущего экономического роста государства, снижаются расходы путем улучшения возможностей их трудоустройства снижаются расходы имеет экономический. Расширение доступа людей с инвалидностью к образованию и трудоустройству имеет огромный экономический. Расширение доступа людей с инвалидностью к образованию и трудоустройству имеет огромный экономический эффект, поскольку их человеческий капитал преобразуется в источник будущего экономического роста государства, снижаются расходы путем улучшения возможностей их трудоустройства снижаются расходы имеет экономический. Расширение доступа людей с инвалидностью к образованию и трудоустройству имеет огромный экономический."
}

export const previewsData: Preview[] = Array.from({ length: 5 }).map(
	(_, index) => ({
		...preview,
		id: index + 1
	})
)

const blog: Blog = {
	id: 1,
	image: "/home/blog.jpg",
	title: "Право на образование лиц с инвалидностью",
	subTitle: "24 декабрь 2024 г.",
	description:
		"Этот доклад посвящён анализу права на образование для лиц с инвалидностью, ключевым законодательным актам, существующим программам и вызовам, а также современным подходам к обеспечению доступности образования для всех... Этот доклад посвящён анализу права на образование для лиц с инвалидностью, ключевым законодательным актам, существующим программам и вызовам, а также современным подходам к обеспечению доступности образования для всех..."
}

export const blogsData: Blog[] = Array.from({ length: 3 }).map((_, index) => ({
	...blog,
	id: index + 1
}))
