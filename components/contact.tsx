"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const toastSuccess = () =>
		toast.success("Email sent successfully!", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	const toastError = () =>
		toast.error("Oops, something went wrong...", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const handleSubmit = async (e: React.FormEvent) => {
		const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const response = await fetch(`${endpoint}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, message }),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
		} catch (error: unknown) {
			console.error("Error occurred:", error);
			toastError();
		} finally {
			setIsSubmitting(false);
			toastSuccess();
		}
	};

	return (
		<motion.section
			className="mb-20 px-3 sm:mb-28 w-[min(100%,38rem)]"
			id="contact"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}>
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
					required
					className="h-12 rounded-lg border border-black/10 px-4"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<textarea
					required
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
					placeholder="Your message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					disabled={isSubmitting}
					type="submit"
					className="flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full text-white gap-2 hover:scale-[1.10] outline-none active:scale-105 transition hover:shadow-lg disabled:bg-opacity-65 disabled:scale-100">
					{isSubmitting ? (
						<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
					) : (
						<>
							Submit <FaPaperPlane />
						</>
					)}{" "}
				</button>
				<ToastContainer />
			</form>
		</motion.section>
	);
}
