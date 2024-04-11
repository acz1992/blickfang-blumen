import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID!,
				import.meta.env.VITE_TEMPLATE_ID!,
				form.current!,
				import.meta.env.VITE_PUBLIC_KEY!
			)
			.then(
				() => {
					console.log("SUCCESS!");
					setEmailSubmitted(true);
					setFormData({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					console.log("FAILED...", error);
				}
			);
	};

	// Overlay confirming Form Submission
	useEffect(() => {
		if (emailSubmitted) {
			const handleOutsideClick = (e: MouseEvent) => {
				if (form.current && !form.current.contains(e.target as Node)) {
					setEmailSubmitted(false);
				}
			};

			document.addEventListener("mousedown", handleOutsideClick);

			return () => {
				document.removeEventListener("mousedown", handleOutsideClick);
			};
		}
	}, [emailSubmitted]);

	return (
		<>
			<form
				className="flex flex-col gap-y-4"
				ref={form}
				onSubmit={sendEmail}
			>
				<div className="flex gap-x-10">
					<input
						className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-primary"
						type="text"
						placeholder="Your name"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleInputChange}
						required
					/>
					<input
						className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-primary"
						type="email"
						placeholder="Your email address"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleInputChange}
						required
					/>
				</div>
				<input
					className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3"
					type="text"
					placeholder="Your message"
					name="message"
					id="message"
					value={formData.message}
					onChange={handleInputChange}
					required
				/>
				<button
					type="submit"
					className="btn mb-[30px] mt-5 mx-auto lg:mx-0 self-start"
				>
					Send it
				</button>
			</form>

			{emailSubmitted && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-[#eef7f9] p-5 rounded-lg">
						<p className="text-primary text-lg font-bold mt-2">
							I&apos;ll be in touch soon
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ContactForm;
