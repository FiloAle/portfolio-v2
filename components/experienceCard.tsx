"use client";
import { useState } from "react";

type ExperienceCardProps = {
	title: string;
	period: string;
	description: React.ReactNode;
};

export default function ExperienceCard({
	title,
	period,
	description,
}: ExperienceCardProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			onClick={() => setExpanded(!expanded)}
			className="flex flex-col rounded-xl p-4 -me-4 -ms-4 hover:bg-zinc-50 max-sm:active:bg-zinc-50 transition-colors duration-500 select-none"
		>
			<h2 className="font-serif text-lg md:text-2xl">{title}</h2>
			<p className="font-sans text-xs md:text-sm text-zinc-500 mb-3.5 md:mb-4 ps-2">
				{period}
			</p>
			<p
				className={`font-sans text-sm md:text-lg text-zinc-500 ps-2 transition-all duration-300 ${
					expanded ? "line-clamp-none" : "max-sm:line-clamp-2"
				}`}
			>
				{description}
			</p>
			<p
				className={`font-sans text-xs md:text-sm ps-2 mt-1.5 sm:hidden ${
					expanded ? "text-orange-500" : "text-blue-500"
				}`}
			>
				{expanded ? "Minimize" : "Expand"}
			</p>
		</div>
	);
}
