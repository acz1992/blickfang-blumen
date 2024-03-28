import React from "react";

import WomanImg from "../assets/img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="section">
			<div className="container mx-auto h-full relative">
				{/* Text & img wrapper */}
				<div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
					{/* Image */}
					<div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
						<img src={WomanImg} alt="" />
					</div>
					{/* Text */}
					<div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
