"use client";
import React from "react";
import { projectsData } from "../lib/data";
import Project from "./project";
import { motion } from "framer-motion";

export default function Projects() {
	return (
		<motion.section
			id="projects"
			className="scroll-mt-28 px-3"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}>
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
		</motion.section>
	);
}
