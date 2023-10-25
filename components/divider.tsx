"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
	return (
		<motion.div
			className="bg-gray-200 sm:my-20 my-12 h-1 w-16 rounded-full  sm:block"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}></motion.div>
	);
}
