"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Intro() {
	return (
		<section
			className="max-w-[50rem] sm:mb-0 scroll-mt-[100rem]"
			id="home">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.5 }}>
						<Image
							src="https://avatars.githubusercontent.com/u/83939699?v=4"
							alt="Konstantin portrait"
							width={192}
							height={192}
							quality={100}
							priority={true}
							className="h-36 w-36 rounded-full border-white border-[0.25rem] shadow-2xl object-cover"></Image>
					</motion.div>
					<motion.div
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: 1,
							scale: 1,
							rotate: [0, 25, -25, 25, -25, 25, 0],
						}}
						transition={{ delay: 0.5 }}>
						👋
					</motion.div>
				</div>
			</div>
			<motion.h1
				className="text-center font-medium text-2xl text-gray-950 mb-10 mt-7 px-4 !leading-[1.5] sm:text-3xl "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}>
				<span className="font-bold">Hi, I'm Konstantin. </span>I'm a{" "}
				<span className="font-bold">full-stack developer </span>based in Tokyo.
				My primary focus is{" "}
				<span className="font-bold underline">
					Javascript, React and Node.js
				</span>{" "}
				I enjoy fashion, photography, and{" "}
				<span className="italic">building websites and apps</span>.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}>
				<a
					className="text-white  bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:shadow-lg outline-none active:scale-105 transition cursor-pointer"
					href="/Konstantin_Shambazov_Resume.pdf"
					download>
					Download CV <BsDownload />
				</a>
				<Link
					href="#contact"
					className="bg-white flex items-center gap-2 px-7 py-3 rounded-full hover:scale-110 outline-none active:scale-105 hover:shadow-lg transition border border-black/10">
					Contact me here <BsArrowRight />
				</Link>
				<a
					href="https://www.linkedin.com/in/kshambazov/"
					target="_blank"
					className="bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] outline-none active:scale-105 hover:shadow-lg transition cursor-pointer border border-black/10">
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/Constantine7s"
					target="_blank"
					className="bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] outline-none active:scale-105 transition hover:shadow-lg cursor-pointer border border-black/10">
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}
