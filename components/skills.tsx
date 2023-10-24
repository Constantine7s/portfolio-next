import { skillsData } from "@/lib/data";
import React from "react";

export default function Skills() {
	return (
		<section
			className="max-w-[53rem] scroll-mt-28 text-center"
			id="skills">
			<h2 className="text-3xl font-medium capitalize text-center mb-8">
				My Skills
			</h2>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<li
						className="bg-white border border-black/[0.1] rounded-xl py-2 px-3 m-1 hover:scale-[1.1] transition shadow-sm hover:shadow-md"
						key={index}>
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
}
