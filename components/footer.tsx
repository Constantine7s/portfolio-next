"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<motion.footer
			className="mb-10 px-4 text-center text-gray-500"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}>
			<small className="mb-2 block text-xs">
				&copy; 2023 Konstantin Shambazov. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with
				React & Next.js, TypeScript, Tailwind CSS, Framer Motion, AWS (Amplify,
				Lambda, API Gateway, SES)
			</p>
		</motion.footer>
	);
}
