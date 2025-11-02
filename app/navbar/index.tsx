"use client";

import Link from "next/link";
import { HomeSimple, AppleShortcuts, Post } from "iconoir-react";
import { usePathname } from "next/navigation";

function NavEntry({
	href,
	icon,
	currentPath,
	ariaLabel,
}: {
	href: string;
	icon: React.ReactNode;
	currentPath: string;
	ariaLabel: string;
}) {
	const isActive = currentPath === href || currentPath.startsWith(href + "/");
	return (
		<Link
			href={href}
			onClick={() => {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}}
			className={`h-10 w-10 rounded-full flex flex-row justify-center items-center relative z-10 transition-colors duration-500 ease-in-out ${
				isActive ? "text-zinc-800" : "text-zinc-400"
			}`}
			aria-label={ariaLabel}
		>
			{icon}
		</Link>
	);
}

export default function Navbar() {
	const currentPath = usePathname();

	let translateClass = "translate-x-0";
	if (currentPath.startsWith("/projects"))
		translateClass = "translate-x-[2.75rem]";
	if (currentPath === "/about") translateClass = "translate-x-22";

	return (
		<div className="fixed left-0 bottom-1 w-dvw flex items-start justify-center pb-2 sm:pb-8 font-sans z-50">
			<main className="relative w-max p-1.5 bg-white drop-shadow-[0_0px_6px_rgba(0,0,0,0.08)] rounded-full">
				<div className="absolute inset-0 bg-amber-50/10 rounded-full z-0"></div>
				<div
					className={`absolute left-1.5 bottom-1.5 h-10 w-10 rounded-full bg-zinc-100 z-0 transform transition-transform duration-500 ease-in-out ${translateClass}`}
				></div>
				<div className="flex flex-row justify-between items-center gap-1 relative z-10">
					<NavEntry
						href="/"
						icon={<HomeSimple strokeWidth={1.2} />}
						currentPath={currentPath}
						ariaLabel="Home"
					/>
					<NavEntry
						href="/projects"
						icon={<AppleShortcuts strokeWidth={1.2} />}
						currentPath={currentPath}
						ariaLabel="Projects"
					/>
					<NavEntry
						href="/about"
						icon={<Post strokeWidth={1.2} />}
						currentPath={currentPath}
						ariaLabel="About"
					/>
				</div>
			</main>
		</div>
	);
}
