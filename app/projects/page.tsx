import { getProjects } from "@/lib/getProjects";
import Link from "next/link";
import { ArrowRight } from "iconoir-react";

export default async function Projects() {
	const projects = await getProjects();

	return (
		<div className="w-full h-full">
			<main className="flex flex-col gap-8">
				<div className="flex flex-col gap-8 h-32 md:h-40">
					<h1 className="font-serif text-2xl md:text-5xl font-[350] tracking-[-0.05rem] leading-7.5 md:leading-14 text-zinc-800">
						Personal{" "}
						<span className="font-[410] italic bg-emerald-50 text-emerald-500">
							projects
						</span>
					</h1>
					<p className="font-sans text-sm md:text-lg text-zinc-500 text-pretty">
						Here you can browse a selection of my most recent projects, from
						experimental concepts to&nbsp;fully&nbsp;developed case studies.
					</p>
				</div>

				<div className="flex flex-col -mt-2.5 md:-mt-4 -mb-1.5 max-sm:gap-1">
					{projects.map((project) => (
						<Link
							key={project.slug}
							href={`/projects/${project.slug}`}
							className="-me-8"
						>
							<div className="group block font-sans rounded-xl w-full hover:bg-zinc-50 max-sm:active:bg-zinc-50 p-4 max-sm:py-2.5 transition-colors duration-500 -mx-4">
								<div className="flex flex-row justify-between items-center">
									<div className="flex flex-col">
										<h2 className="text-sm md:text-lg text-zinc-800">
											{project.metadata.title}
										</h2>
										{project.metadata.summary && (
											<p className="text-zinc-500 md:-mt-0.5 text-xs md:text-sm">
												{project.metadata.summary}
											</p>
										)}
									</div>
									<ArrowRight className="text-zinc-800 h-4 w-4 md:h-4.5 md:w-4.5 opacity-0 max-sm:group-active:-rotate-45 sm:group-hover:-rotate-45 max-sm:group-active:opacity-100 sm:group-hover:opacity-100 transition-all duration-500" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
