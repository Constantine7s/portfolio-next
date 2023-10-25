"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

		e.preventDefault();
		const response = await fetch(`${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, message }),
		});

		if (response.ok) {
			console.log("Message sent successfully");
		} else {
			console.error("Error sending message");
		}
	};

	return (
		<motion.section
			className="mb-20 px-3 sm:mb-28 w-[min(100%,38rem)]"
			id="contact"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}>
			<h2 className="text-3xl font-medium capitalize text-center mb-10">
				Contact Me
			</h2>
			<p className="text-gray-700 -mt-6">
				You can contact me directly at
				<a href="mailto:k.shambazov@gmail.com">
					{" "}
					<u> @k.shambazov@gmail.com</u>
				</a>{" "}
				or through this form.
			</p>
			<form
				className="flex mt-10 flex-col"
				onSubmit={handleSubmit}>
				<input
					className="h-12 rounded-lg border border-black/10 px-4"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
					placeholder="Your message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					type="submit"
					className="flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full text-white gap-2 hover:scale-[1.10] outline-none active:scale-105 transition hover:shadow-lg ">
					Submit <FaPaperPlane />
				</button>
			</form>
		</motion.section>
	);
}
