import Image from "next/image";
import { Mail, Instagram } from "iconoir-react";
import ExperienceCard from "@/components/experienceCard";

type PictureProps = {
	src: string;
	alt: string;
	initialRotation?: string;
	hoverRotation?: string;
	className?: string;
};

function Picture({
	src,
	alt,
	initialRotation = "rotate-0",
	hoverRotation = "hover:rotate-0",
	className = "",
}: PictureProps) {
	return (
		<div
			className={`relative transition-transform duration-500 ease-in-out max-sm:active:scale-105 sm:hover:scale-105 ${initialRotation} ${hoverRotation} ${className} w-full h-full max-sm:-mb-1`}
		>
			<Image
				src="/imgs/Cervia/tape.avif"
				alt="Tape"
				className="absolute -mt-[5%] w-[30%] ms-[28%] select-none pointer-events-none"
				width={2000}
				height={1000}
				priority={true}
			/>
			<div className="h-full w-[90%] aspect-3/4">
				<Image
					src={src}
					alt={alt}
					height={4000}
					width={3000}
					priority={true}
					className="object-cover h-full w-full select-none pointer-events-none rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg bg-zinc-50 outline-3 sm:outline-6 sm:-outline-offset-5 outline-white -outline-offset-2"
				/>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<div className="w-full h-full">
			<main className="flex flex-col gap-8">
				<div className="flex flex-col gap-8 h-32 md:h-40">
					<h1 className="font-serif text-2xl md:text-5xl font-[350] tracking-[-0.05rem] leading-7.5 md:leading-14 text-zinc-800">
						About{" "}
						<span className="font-[410] italic bg-blue-50 text-blue-500">
							me
						</span>
					</h1>
					<p className="font-sans text-sm md:text-lg text-zinc-500 text-pretty">
						As you may already know I'm a UX/UI&nbsp;designer based in&nbsp;
						<a
							href="https://en.wikipedia.org/wiki/Milan"
							target="_blank"
							className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
						>
							Milan
						</a>
						, but if you'd like to discover&nbsp;more about&nbsp;me, here's
						a&nbsp;broader&nbsp;overview.
					</p>
				</div>

				<div className="flex flex-col gap-12 md:gap-18">
					<div className="flex flex-col">
						<h1 className="font-sans text-sm md:text-lg">My roots</h1>

						<p className="font-sans text-sm md:text-lg text-zinc-500 text-pretty pt-2">
							Raised in{" "}
							<a
								href="https://en.wikipedia.org/wiki/Cervia"
								target="_blank"
								className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
							>
								Cervia
							</a>
							, a small sunny Italian city, I've&nbsp;always had a strong
							passion for technology. Experimenting with electronics with my dad
							has certainly driven me to follow a study&nbsp;path
							in&nbsp;Computer Science,&nbsp;but&nbsp;then, growing up,
							I&nbsp;also wanted to explore the way technology is shaped, and
							that's why I've started my design&nbsp;career.
						</p>

						<div className="flex flex-row w-full h-full pt-6 md:pt-10 pe-0.5 justify-between">
							<Picture
								src="/imgs/Cervia/spiaggia.avif"
								alt="Cervia's beach"
								initialRotation="rotate-[-2deg]"
								hoverRotation="group-hover:rotate-[4deg]"
							/>
							<Picture
								src="/imgs/Cervia/toby.avif"
								alt="Toby, my dog"
								initialRotation="rotate-[1deg]"
								hoverRotation="group-hover:rotate-[-5deg]"
							/>
							<Picture
								src="/imgs/Cervia/torre.avif"
								alt="Cervia's San Michele tower"
								initialRotation="rotate-[-3deg]"
								hoverRotation="group-hover:rotate-[5deg]"
							/>
						</div>
					</div>
				</div>

				<div className="relative pt-8">
					<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
				</div>

				<section className="w-full flex flex-col items-start justify-center text-start pt-6 gap-3 md:gap-8">
					<h1 className="font-serif text-2xl md:text-4xl font-[350] tracking-[-0.05rem]">
						Past experiences
					</h1>

					<p className="font-sans text-sm md:text-lg text-zinc-500 mt-2 md:mt-1">
						From my academic background to real&nbsp;world projects, every step
						has shaped how I think and create, learning to see{" "}
						<span className="italic bg-blue-50 text-blue-500">
							design and&nbsp;technology as&nbsp;two sides of&nbsp;the
							same&nbsp;thing
						</span>
						.
					</p>

					<div className="w-full h-full flex flex-col pt-2 gap-2">
						<ExperienceCard
							title="· Politecnico di Milano"
							period="2021 — ongoing"
							description={
								<>
									Studied{" "}
									<a
										href="https://www.polimi.it/formazione/corsi-di-laurea/dettaglio-corso/design-della-comunicazione"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										Communication Design
									</a>{" "}
									from 2021 to&nbsp;2024, where I built a strong foundation
									in&nbsp;visual&nbsp;communication and design thinking.
									Since&nbsp;2024, I’ve been pursuing a Master’s in&nbsp;
									<a
										href="https://www.polimi.it/en/education/laurea-magistrale-programmes/programme-detail/digital-and-interaction-design"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										Digital&nbsp;and&nbsp;Interaction&nbsp;Design
									</a>
									, exploring how&nbsp;technology can enhance
									people's&nbsp;lives.
								</>
							}
						/>

						<ExperienceCard
							title="· CopySystem SnC"
							period="2022 — 2023"
							description={
								<>
									During my second year at Politecnico di Milano, I've&nbsp;had
									the&nbsp;opportunity to experience a real world scenario by
									working at&nbsp;
									<a
										href="https://www.copysystem.net/azienda/"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										CopySystem
									</a>
									. There, I've been delivering both digital and physical
									artifacts, continuously developing a&nbsp;deeper knowledge in
									visual communication, editorial design
									and&nbsp;marketing&nbsp;fields.
								</>
							}
						/>

						<ExperienceCard
							title="· ITT Blaise Pascal"
							period="2016 — 2021"
							description={
								<>
									My passion for technology led me to study Information
									Technology and Telecoms at{" "}
									<a
										href="https://www.ispascalcomandini.it/itt-b-pascal/"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										ITT&nbsp;Blaise&nbsp;Pascal
									</a>
									, where I've had the opportunity to&nbsp;develop skills
									I'm&nbsp;still making advantage of&nbsp;nowadays. There,
									I've&nbsp;learned the&nbsp;basics of&nbsp;Computer Science
									using tools and&nbsp;languages such as{" "}
									<a
										href="https://dotnet.microsoft.com/it-it/languages/csharp"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										C#
									</a>
									,{" "}
									<a
										href="https://isocpp.org/tour"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										C++
									</a>
									,{" "}
									<a
										href="https://www.mysql.com"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										MySQL
									</a>{" "}
									and&nbsp;
									<a
										href="https://kotlinlang.org"
										target="_blank"
										className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
									>
										Kotlin
									</a>
									.
								</>
							}
						/>
					</div>
				</section>

				<div className="relative pt-8">
					<div className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-dashed border-zinc-200"></div>
				</div>

				<section className="w-full flex flex-col items-start justify-center text-start pt-6 gap-3 md:gap-8">
					<h1 className="font-serif text-2xl md:text-4xl font-[350] tracking-[-0.05rem]">
						Contacts
					</h1>

					<p className="font-sans text-sm md:text-lg text-zinc-500 mt-2 md:mt-1">
						Feel free to{" "}
						<span className="italic bg-blue-50 text-blue-500">
							reach out if you’d like to collaborate
						</span>
						, share ideas, or simply say hello!
					</p>

					<div className="flex flex-col font-sans text-sm md:text-lg text-zinc-500 gap-0.5">
						<div className="flex flex-row gap-1 items-center align-middle">
							<Mail className="h-5 w-5 md:h-6 md:w-6 -my-6 inline-flex max-sm:pb-[0.14rem] max-sm:pt-[0.11rem] md:pb-[0.29rem] md:pt-[0.085rem] md:translate-y-[2px] me-0.5 -ms-0.5" />
							<a
								href="mailto:ciao@filippoalessandrini.com"
								className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
							>
								ciao@filippoalessandrini.com
							</a>
						</div>

						<div className="flex flex-row gap-1 items-center align-middle">
							<Instagram className="h-5 w-5 md:h-6 md:w-6 -my-6 inline-flex max-sm:pb-[0.14rem] max-sm:pt-[0.11rem] md:pb-[0.29rem] md:pt-[0.085rem] md:translate-y-[2px] me-0.5 -ms-0.5" />
							<a
								href="https://www.instagram.com/_filippoalessandrini_"
								target="_blank"
								className="underline underline-offset-2 decoration-zinc-200 hover:decoration-zinc-500 transition-colors ease-in-out duration-300"
							>
								_filippoalessandrini_
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
