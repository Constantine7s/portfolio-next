import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Konstantin | Portfolio",
	description: "Konstantin Shambazov - Full Stack Software Engineer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-slate-50 text-gray-950 pt-28 sm:pt-36`}>
				<div className="bg-[#fbe2e3] absolute top-[-7rem] -z-10 right-[11rem] h-[32rem]  w-[31rem] rounded-full blur-[10rem] sm:w-[68rem] "></div>
				<div className="bg-[#e2deff] absolute top-[-1rem] -z-10 left-[-35rem] h-[32rem]  w-[31rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] l:left-[-15rem]  xl:left-[-5rem]"></div>
				<Header />
				{children}
			</body>
		</html>
	);
}
