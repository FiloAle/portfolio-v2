import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Accessibility,
	Donate,
	Leaf,
	PauseSolid,
	MusicDoubleNote,
} from "iconoir-react";

type ProjectCardProps = {
	src: string;
	href: string;
	title: string;
	className?: string;
};

function ProjectCard({ src, href, title, className = "" }: ProjectCardProps) {
	return (
		<Link
			href={href}
			className={`group relative block !overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-zinc-200 bg-zinc-50 ${className}`}
		>
			<div className="relative w-full h-full">
				<Image
					src={src}
					alt={title}
					fill
					priority={true}
					className="object-cover bg-zinc-50 transition-transform ease-in-out duration-500 max-sm:group-active:-translate-y-12 group-hover:-translate-y-12 z-10 rounded-xl"
				/>
				<div className="absolute bottom-0 left-0 w-full text-zinc-800 px-4 py-3 sm:pb-3 sm:pt-2.5 z-5 h-12 align-middle flex flex-row justify-between items-center">
					<p className="font-sans text-sm sm:text-base line-clamp-1">{title}</p>
					<ArrowRight className="h-4 w-4 max-sm:group-active:-rotate-45 sm:group-hover:-rotate-45 transition-transform duration-500" />
				</div>
			</div>
		</Link>
	);
}

type ToolkitIconProps = {
	src: string;
	alt: string;
	initialRotation?: string; // es: "rotate-[-3deg]"
	hoverRotation?: string; // es: "group-hover:rotate-[6deg]"
	className?: string;
	href: string;
};

function ToolkitIcon({
	src,
	alt,
	initialRotation = "rotate-0",
	hoverRotation = "hover:rotate-0",
	className = "",
	href = "",
}: ToolkitIconProps) {
	return (
		<a
			className="group flex flex-col items-center transition-transform duration-500 ease-in-out"
			href={href}
			target="_blank"
		>
			<div
				className={`transition-transform duration-500 ease-in-out hover:scale-105 ${initialRotation} ${hoverRotation} ${className} h-16 w-16 md:h-22 md:w-22`}
			>
				<Image
					src={src}
					alt={alt}
					fill
					className="object-cover h-full w-full select-none pointer-events-none"
				/>
			</div>
			<span className="mt-1 font-sans hidden md:block text-sm text-zinc-500 opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-in-out -translate-y-2 md:group-hover:translate-y-0">
				{alt}
			</span>
		</a>
	);
}

export default function Home() {
	return (
		<div className="w-full h-full">
			<main className="flex flex-col gap-8 text-zinc-800">
				<div className="flex flex-col gap-8 h-52 md:h-72">
					<h1 className="font-serif text-2xl md:text-5xl font-[350] tracking-[-0.05rem] leading-7.5 md:leading-14">
						We should craft experiences
						<br />
						that feel{" "}
						<span className="font-[410] italic bg-orange-50 text-orange-500">
							intuitive
						</span>
						, inspire{" "}
						<span className="font-[410] italic bg-emerald-50 text-emerald-500">
							curiosity
						</span>
						,
						<br />
						and actually{" "}
						<span className="font-[410] italic bg-blue-50 text-blue-500">
							make life easier
						</span>
						.
					</h1>

					<p className="font-sans text-sm md:text-lg text-zinc-500 text-pretty">
						Hi there, I'm Filippo, a UX/UI designer currently studying Digital
						and Interaction Design at{" "}
						<a
							href="https://www.polimi.it"
							target="_blank"
							className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
						>
							PoliMi
						</a>
						.
					</p>
				</div>

				<div className="flex flex-col w-full gap-3">
					<h1 className="font-sans text-sm md:text-lg">Selected works</h1>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-dense">
						<ProjectCard
							src="/imgs/Padiglione-nel-Parco-Sempione/copertina.avif"
							href="/projects/Padiglione-nel-Parco-Sempione"
							title="Padiglione nel Parco Sempione"
							className="relative max-md:aspect-5/4 md:col-span-2"
						/>
						<ProjectCard
							src="/imgs/Fire-TV/fire-tv.avif"
							href="/projects/Amazon-Fire-TVgether"
							title="Amazon Fire TVgether"
							className="relative aspect-2/1 md:aspect-square"
						/>
						<ProjectCard
							src="/imgs/Il-Giardino-di-Lipari/poster.avif"
							href="/projects/Il-Giardino-di-Lipari"
							title="Il Giardino di Lipari"
							className="relative aspect-3/2 md:aspect-square"
						/>
						<ProjectCard
							src="/imgs/HEEP/app.avif"
							href="/projects/HEEP"
							title="HEEP"
							className="relative aspect-square w-full h-full row-span-2 md:col-span-2"
						/>
						<ProjectCard
							src="/imgs/Libra/libra.avif"
							href="/projects/Libra"
							title="Libra"
							className="relative aspect-16/9 md:aspect-square"
						/>
					</div>
				</div>

				<div className="relative pt-8">
					<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
				</div>

				<section className="w-full flex flex-col items-start justify-center text-start pt-6 gap-3 md:gap-8">
					<h1 className="font-serif text-2xl md:text-4xl font-[350] tracking-[-0.05rem]">
						Approach to projects
					</h1>

					<p className="font-sans text-sm md:text-lg text-zinc-500 mt-2 md:mt-1">
						<Donate className="h-5 w-5 md:h-6 md:w-6 -my-6 inline-flex pb-1 md:pb-[0.325rem] md:pt-[0.05rem] me-0.5 -ms-0.5" />
						Each project I undertake is guided by{" "}
						<span className="italic bg-orange-50 text-orange-500">
							intention and meticulous care
						</span>
						.
						<br />
						<br />
						<Leaf className="h-5 w-5 md:h-6 md:w-6 -my-6 inline-flex max-sm:pb-[0.23rem] max-sm:pt-[0.02rem] md:pb-[0.325rem] md:pt-[0.05rem] me-0.5 -ms-0.5" />
						I focus on creating experiences that are not only functional but{" "}
						<span className="italic bg-emerald-50 text-emerald-500">
							meaningful, respectful to users, and&nbsp;thoughtful
						</span>{" "}
						in every detail.
						<br />
						<br />
						<Accessibility className="h-5 w-5 md:h-6 md:w-6 -my-6 inline-flex max-sm:pb-[0.17rem] max-sm:pt-[0.08rem] md:pb-[0.29rem] md:pt-[0.085rem] me-0.5 -ms-0.5" />{" "}
						My work aims to balance{" "}
						<span className="italic bg-blue-50 text-blue-500">
							aesthetics, usability, and ethics
						</span>
						, ensuring that every design decision has{" "}
						<span className="italic bg-blue-50 text-blue-500">
							purpose and consideration
						</span>
						.
					</p>
				</section>

				<div className="relative pt-8">
					<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
				</div>

				<div className="flex flex-col lg:flex-row items-stretch w-full lg:gap-x-20">
					<section className="w-full lg:w-6/11 flex flex-col items-start justify-center text-start pt-6 gap-3 md:gap-8">
						<h1 className="font-serif text-2xl md:text-4xl font-[350] tracking-[-0.05rem]">
							The everyday go-to
						</h1>

						<p className="font-sans text-sm md:text-lg text-zinc-500 mt-2 md:mt-1 -mb-1 md:-mb-5">
							My daily toolkit is minimalistic but extremely efficient,
							as&nbsp;it's&nbsp;built on these powerful tools:
						</p>

						<div className="flex flex-wrap w-screen md:w-max -mx-8 px-6.5 max-sm:justify-between md:gap-3">
							<ToolkitIcon
								src="/icons/figma.avif"
								alt="Figma"
								initialRotation="rotate-[-3deg]"
								hoverRotation="group-hover:rotate-[5deg]"
								href="https://www.figma.com"
							/>
							<ToolkitIcon
								src="/icons/vscode.avif"
								alt="VS Code"
								initialRotation="rotate-[2deg]"
								hoverRotation="group-hover:rotate-[-6deg]"
								href="https://code.visualstudio.com"
							/>
							<ToolkitIcon
								src="/icons/next.avif"
								alt="Next.JS"
								initialRotation="rotate-[-4deg]"
								hoverRotation="group-hover:rotate-[8deg]"
								href="https://nextjs.org"
							/>
							<ToolkitIcon
								src="/icons/tailwind.avif"
								alt="Tailwind CSS"
								initialRotation="rotate-[5deg]"
								hoverRotation="group-hover:rotate-[-10deg]"
								href="https://tailwindcss.com"
							/>
							<ToolkitIcon
								src="/icons/applemusic.avif"
								alt="Apple Music"
								initialRotation="rotate-[-4deg]"
								hoverRotation="group-hover:rotate-[8deg]"
								href="https://music.apple.com/home"
							/>
						</div>
					</section>

					<a
						className="block w-full sm:max-md:max-w-78 md:max-lg:max-w-120 h-48 mt-7 lg:mt-27 lg:h-35 group"
						href="https://music.apple.com/album/indaco/1676537015?i=1676537387"
						target="_blank"
					>
						<div className="relative h-full w-full flex-row bg-gradient-to-b from-stone-100 to-stone-200 outline-[1.5px] outline-stone-200/32 -outline-offset-[1.5px] rounded-4xl p-5 lg:p-4 shadow-sm max-sm:group-active:scale-105 sm:group-hover:scale-105 transition-transform duration-500 ease-in-out">
							<MusicDoubleNote className="absolute right-5 top-5 w-7 h-7 lg:right-5 lg:top-5 lg:h-5 lg:w-5 text-zinc-800 opacity-65" />
							<div className="w-max h-full flex flex-row gap-3">
								<div className="relative overflow-hidden aspect-square h-full bg-white rounded-2xl shrink-0 drop-shadow-[0_0px_6px_rgba(0,0,0,0.08)]">
									<Image
										src="/icons/indaco.avif"
										alt="Indaco"
										width={400}
										height={400}
										className="object-cover"
									/>
								</div>
								<div className="h-full w-full flex flex-col text-zinc-800 justify-end">
									<h1 className="font-sans font-semibold text-xs opacity-75">
										NOW PLAYING
									</h1>
									<h1 className="font-sans font-bold">Indaco</h1>
									<h2 className="font-sans text-sm -mt-[1px] md:-mt-[3px] md:mb-1 opacity-75">
										Drast
									</h2>
									<div className="h-6 w-max bg-white/80 ps-2 pe-2.5 pt-2.5 pb-3 flex flex-col justify-center rounded-full mt-2">
										<div className="h-full w-full flex flex-row justify-center align-middle items-center gap-1">
											<PauseSolid className="h-4 w-4 mt-[1px]" />
											<h1 className="font-sans font-extrabold text-[0.75rem] sm:text-[0.8rem] sm:mt-0.5">
												Pause
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="relative max-lg:pt-8">
					<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
				</div>

				<section className="w-full flex flex-col items-start justify-center text-start pt-6 gap-3 md:gap-8">
					<h1 className="font-serif text-2xl md:text-4xl font-[350] tracking-[-0.05rem]">
						Let's build something together
					</h1>

					<p className="font-sans text-sm md:text-lg text-zinc-500 mt-2 md:mt-1 text-pretty">
						I'm currently open to work, so if you have an idea and you'd like to
						bring it to life or you're just interested in{" "}
						<span className="italic bg-blue-50 text-blue-500">
							working on something new together
						</span>
						, you can{" "}
						<a
							href="mailto:ciao@filippoalessandrini.com"
							className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
						>
							book&nbsp;a&nbsp;call
						</a>{" "}
						with me to discuss about it.
					</p>
				</section>
			</main>
		</div>
	);
}
