import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import Navbar from "./navbar";
import Topbar from "./topbar";

const plus_jakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
	style: ["normal", "italic"],
});

const crimson = Crimson_Pro({
	variable: "--font-crimson",
	subsets: ["latin"],
	style: ["normal", "italic"],
});

export const metadata: Metadata = {
	title: "filippo",
	description: "filippo's portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="scroll-pt-[48px] md:scroll-pt-[70px] no-scrollbar"
		>
			<body
				className={`${plus_jakarta.variable} ${crimson.variable} antialiased px-8 md:px-32 max-w-6xl mx-auto no-scrollbar`}
			>
				<Topbar />
				<div className="pt-30 md:pt-40 bg-amber-50/10 z-0 no-scrollbar">
					{children}
				</div>
				<Navbar />
				<footer className="w-full text-end text-zinc-400 text-sm md:text-lg font-sans pb-32 md:pb-38">
					<div className="relative py-16">
						<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
					</div>
					filippo alessandrini © {new Date().getFullYear()}
				</footer>
			</body>
		</html>
	);
}
