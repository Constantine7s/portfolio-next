"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "../lib/data";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	return (
		<motion.section className="group mb-4 sm:mb-8 last:mb-0 bg-gray-100 max-w-[42rem] overflow-hidden border border-black/5 sm:pr-8 sm:group-even:pl-8 relative sm:h-[20rem] shadow-md rounded-xl  hover:bg-gray-200 transition">
			<div className="pb-7 pt-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
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
				quality={95}
				className="absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-lg shadow-lg group-even:right-[initial] group-even:-left-40 group-hover:scale-[1.04] group-hover:shadow-xl transition"
			/>
		</motion.section>
	);
}
