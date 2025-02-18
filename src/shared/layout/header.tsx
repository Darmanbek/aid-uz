import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants"
import { Container, Stack } from "@/widgets"
import { Eye } from "lucide-react"
import Image from "next/image"
import { type FC } from "react"

const Header: FC = () => {
	return (
		<header>
			<Container>
				<div
					className={
						"flex justify-between gap-2 border-b-4 border-primary py-6"
					}
				>
					<Stack className={"items-center"}>
						<Image src={"/logo.png"} width={110} height={114} alt={""} />
						<Stack className={"flex-col gap-1"}>
							<h1 className={"text-3xl font-semibold text-primary"}>
								{SITE_NAME}
							</h1>
							<h2 className={"text-2xl font-normal"}>{SITE_DESCRIPTION}</h2>
						</Stack>
					</Stack>

					<Stack className={"gap-5"}>
						<Eye
							className={"text-muted-foreground"}
							fill={"currentColor"}
							stroke={"#fff"}
							size={35}
						/>
						<span className={"text-2xl font-normal"}>Py</span>
					</Stack>
				</div>
			</Container>
		</header>
	)
}

export { Header }
