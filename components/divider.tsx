"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
	return (
		<motion.div
			className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				duration: 0.5,
				delay: 0.25,
			}}></motion.div>
	);
}
