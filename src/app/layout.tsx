import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants"
import { Footer, Header, Navbar } from "@/shared/layout"
import { cn } from "@/shared/lib/utils"
import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	style: "normal",
	variable: "--font-montserrat"
})

export const metadata: Metadata = {
	title: {
		template: `%s | ${SITE_NAME}`,
		default: SITE_NAME
	},
	description: SITE_DESCRIPTION,
	icons: {
		icon: "/icon.png",
		apple: "/apple-icon.png",
		shortcut: "/favicon.ico"
	},
	openGraph: {
		images: "/og-image.png"
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang={"en"}>
			<body className={cn(montserrat.variable, montserrat.className)}>
				<div className={"min-h-screen flex flex-col"}>
					<Header />
					<Navbar />
					<main className={"flex-grow flex flex-col gap-12 min-h-[50vh]"}>
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
