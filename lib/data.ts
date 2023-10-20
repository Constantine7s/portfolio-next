import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},

	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const projectsData = [
	{
		title: "",
		description: "",
		tags: [],
		imageUrl: "",
	},
] as const;
