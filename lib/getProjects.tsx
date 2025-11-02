import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";

export function RoundedImage({
	src,
	alt = "",
	className = "",
}: {
	src: string;
	alt?: string;
	className?: string;
}) {
	return (
		<Image
			src={"/imgs" + src}
			alt={alt}
			width={1200}
			height={1200}
			className={
				"my-7 md:my-14 rounded-xl w-auto h-auto object-cover " + className
			}
		/>
	);
}

export function RoundedVideo({
	src,
	caption,
}: {
	src: string;
	caption?: string;
}) {
	return (
		<div className="my-7 md:my-14 overflow-hidden rounded-xl">
			<video
				src={"/videos" + src}
				autoPlay
				muted
				loop
				playsInline
				controls
				className="w-full h-auto rounded-xl"
			/>
			{caption && (
				<p className="mt-2 text-center text-sm text-zinc-500">{caption}</p>
			)}
		</div>
	);
}

export type Project = {
	slug: string;
	content: string;
	metadata: {
		title: string;
		summary?: string;
		date?: string;
	};
};

export async function getProjects(): Promise<Project[]> {
	const dir = path.join(process.cwd(), "projects");
	const files = await fs.readdir(dir);
	const projects = await Promise.all(
		files
			.filter((f) => f.endsWith(".mdx"))
			.map(async (file) => {
				const filePath = path.join(dir, file);
				const raw = await fs.readFile(filePath, "utf8");
				const { content, data } = matter(raw);
				return {
					slug: file.replace(/\.mdx$/, ""),
					content,
					metadata: {
						title: data.title || file.replace(/\.mdx$/, ""),
						summary: data.summary || "",
						date: data.date || "",
					},
				} as Project;
			})
	);

	return projects.sort((a, b) =>
		(b.metadata.date || "").localeCompare(a.metadata.date || "")
	);
}
