import React from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";

export default function Projects() {
	return (
		<section>
			<h2 className="text-3xl font-medium capitalize text-center mb-8">
				My Projects
			</h2>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		<section className="group bg-gray-100 max-w-[42rem] overflow-hidden border border-black/5 sm:pr-8 relative sm:h-[20rem] shadow-md rounded-xl mb-4 sm:mb-8 last:mb-0 ">
			<div className="pb-7 pt-5 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
				<h3 className="text-2xl font-semibold ">{title}</h3>
				<p className="mt-2 mb-2 leading-relaxed text-gray-700">{description}</p>
				<ul className="flex flex-wrap mt-4 sm:mt-auto gap-2">
					{tags.map((tag, index) => (
						<li
							className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
							key={index}>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				src={imageUrl}
				alt={title}
				className="absolute top-8 -right-40 w-[28rem] rounded-top-lg shadow-2xl group-even:right-[initial] group-even:-left-40 "
			/>
		</section>
	);
}
