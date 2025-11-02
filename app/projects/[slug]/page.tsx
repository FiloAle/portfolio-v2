import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjects, RoundedImage, RoundedVideo } from "@/lib/getProjects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/codeBlock";

const components = { RoundedImage, RoundedVideo, pre: CodeBlock };

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
	const { slug } = await params;
	const projects = await getProjects();
	const project = projects.find((p) => p.slug === slug);
	if (!project) return;
	return {
		title: project.metadata.title + " | filippo",
		description: project.metadata.summary,
	};
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const projects = await getProjects();
	const project = projects.find((p) => p.slug === slug);

	if (!project) return notFound();

	return (
		<div className="max-w-4xl mx-auto font-sans">
			<h1 className="font-serif text-2xl md:text-5xl font-[350] tracking-[-0.05rem] leading-7.5 md:leading-14">
				{project.metadata.title}
			</h1>
			{project.metadata.summary && (
				<p className="text-zinc-500 mb-8">{project.metadata.summary}</p>
			)}
			<article className="prose text-sm text-zinc-800 md:text-[1rem] [&>p]:my-1.5 [&>p]:text-zinc-500 [&>h2]:mt-12 [&>h2]:text-xl md:[&>h2]:text-2xl [&>h2]:font-serif [&>ul]:mt-1.5 [&>p>a]:underline [&>p>a]:decoration-zinc-200 [&>p>a]:underline-offset-2 [&>p>a]:hover:decoration-zinc-500 [&>p>a]:transition-colors [&>p>a]:duration-300 [&>p>a]:ease-in-out [&>p>a]:cursor-pointer [&>ul>*]:underline [&>ul]:text-zinc-500 [&>ul>*]:decoration-zinc-200 [&>ul>*]:underline-offset-2 [&>ul>*]:hover:decoration-zinc-500 [&>ul>*]:transition-colors [&>ul>*]:duration-300 [&>ul>*]:ease-in-out text-pretty">
				<MDXRemote source={project.content} components={components} />
			</article>
		</div>
	);
}
