import { employeesData } from "@/shared/data/employees.data"
import { BlogList } from "@/widgets/blog"
import { type FC } from "react"

const ActivityProjects: FC = () => {
	return (
		<>
			<BlogList data={employeesData} />
		</>
	)
}

export { ActivityProjects }
