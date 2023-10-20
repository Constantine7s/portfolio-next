"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] sm:mb-0 ">
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
				<span className="font-bold">full-stack developer</span> with a focus on{" "}
				<span className="font-bold underline">
					Javascript, React and Node.js
				</span>{" "}
				I enjoy building <span className="italic">websites & apps</span>.
			</motion.h1>
		</section>
	);
}
