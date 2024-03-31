import { useContext } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";
import { CursorContext } from "../context/CursorContext";
import ContactForm from "../components/ContactForm";
import MakingFlowers from "../assets/img/contact/process.jpg";

const Contact = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)!;

	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto h-full">
				<div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left relative">
					{/* Blue Background */}
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={transition1}
						className="hidden lg:flex bg-[#eef7f9] bg-opacity-50 absolute bottom-0 left-0 right-0 top-60 -z-10"
					></motion.div>

					{/* Text Section */}
					<div
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						className="lg:flex-1 lg:pt-32 px-4"
					>
						<h1 className="h1">Contact Me</h1>
						{/* <p className="mb-12">
                            I would love to get suggestions from you.
                        </p> */}
						{/* Form */}
						<ContactForm />
					</div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ transition: transition1, duration: 1.5 }}
						className="lg:flex-1"
					>
						<img
							src={MakingFlowers}
							height={"641px"}
							width={"453px"}
							alt="Making Flowers"
							className="max-h-80 max-w-80 lg:max-h-max lg:max-w-max"
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
