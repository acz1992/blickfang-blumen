const ContactForm = () => {
	return (
		<form className="flex flex-col gap-y-4">
			<div className="flex gap-x-10">
				<input
					className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-primary"
					type="text"
					placeholder="Your name"
				/>
				<input
					className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-primary"
					type="text"
					placeholder="Your email address"
				/>
			</div>
			<input
				className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3"
				type="text"
				placeholder="Your message"
			/>
			<button className="btn mb-[30px] mt-5 mx-auto lg:mx-0 self-start">
				Send it
			</button>
		</form>
	);
};

export default ContactForm;
