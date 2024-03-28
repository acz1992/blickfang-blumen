import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

import WomanImg from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";

const About = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section"
		>
			<div
				/* onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler} */
				className="container mx-auto h-full relative"
			>
				{/* Text & img wrapper */}
				<div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
					{/* Image */}
					<div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
						<img src={WomanImg} alt="" />
					</div>
					{/* Text */}
					<motion.div
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						initial={{ opacity: 0, y: "-80%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-80%" }}
						transition={transition1}
						className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
					>
						<h1 className="h1">About Us</h1>
						<p className="mb-12 max-w-sm">
							Blickanfang Blumen bloomed from my love of flowers,{" "}
							<b>desire to share the beauty of the world</b> and
							my passion for floral arrangement.
							<br />
							<br />I spend my free-time wandering Leipzig and
							traversing Flower markets, in order to source the
							most beautiful specimens that I can find.
						</p>
						<Link to={"./portfolio"} className="btn">
							View some examples
						</Link>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
