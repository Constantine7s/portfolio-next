import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
	return (
		<section
			className="mb-20 px-3 sm:mb-28 w-[min(100%,38rem)]"
			id="contact">
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
			<form className="flex mt-10 flex-col">
				<input
					className="h-12 rounded-lg border border-black/10 px-4"
					type="email"
					placeholder="Email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full text-white gap-2 hover:scale-[1.10] outline-none active:scale-105 transition hover:shadow-lg ">
					Submit <FaPaperPlane />
				</button>
			</form>
		</section>
	);
}
