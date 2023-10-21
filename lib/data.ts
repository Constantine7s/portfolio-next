import React from "react";

import planoutImg from "@/public/planout.png";
import talkspaceImg from "@/public/talkspace.png";

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
		title: "TalkSpace",
		description:
			"A real-time chat application with a multi-room feature, that allows users to engage in diverse conversations across multiple chat rooms.",
		tags: [
			"React",
			"Node.js",
			"Express.js",
			"MongoDB",
			"Socket.IO",
			"ChakraUI",
		],
		imageUrl: talkspaceImg,
	},
	{
		title: "PlanOut",
		description:
			"A group task management web application, that allows users to easily create and manage events",
		tags: [
			"Next.js",
			"Typescript",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Firebase",
			"Socket.IO",
			"Docker",
			"Tailwind",
		],
		imageUrl: planoutImg,
	},
] as const;
