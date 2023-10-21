import React from "react";
import { projectsData } from "../lib/data";
import Project from "./project";

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
