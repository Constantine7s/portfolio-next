"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			className="scroll-mt-28"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.5,
				delay: 0.4,
			}}
			id="about">
			<h2 className="text-3xl font-medium capitalize text-center  mb-8">
				About Me
			</h2>
			<p className="mb-3 max-w-[45rem] text-center leading-8">
				Formerly an <span className="font-medium">entrepreneur</span>, I decided
				to pursue my passion for programming and enrolled in a coding bootcamp
				where I studied{" "}
				<span className="font-medium">full-stack software engineering</span>. My
				favorite part of software development is its
				<span className="italic"> problem-solving aspect</span>. As a big fan of
				puzzle games, I love the feeling of finally figuring out a solution to a
				challenge. My core stack includes{" "}
				<span className="font-medium">React, Node.js, and PostgreSQL</span>. I'm
				also proficient with{" "}
				<span className="font-medium">Vue.js, Next.js, MongoDB, AWS</span>, and
				other technologies, and I'm always eager to learn something new.{" "}
				<span className="italic">When I'm not coding</span>, I enjoy exploring
				Tokyo, discovering new places, capturing moments with my camera, and
				tuning in to educational podcasts.
			</p>
		</motion.section>
	);
}
