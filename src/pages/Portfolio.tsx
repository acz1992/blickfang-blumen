import React from "react";
import Image1 from "../assets/img/portfolio/1.png";
import Image2 from "../assets/img/portfolio/2.png";
import Image3 from "../assets/img/portfolio/3.png";
import Image4 from "../assets/img/portfolio/4.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<section className="section">
			<div className="container mx-auto h-full relative">
				<div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
					{/* Text */}
					<div className="flex flex-col lg:items-start">
						<h1 className="h1">Portfolio</h1>
						<p className="mb-12 max-w-sm">
							Blickanfang Blumen bloomed from my love of flowers,{" "}
							<b>desire to share the beauty of the world</b> and
							my passion for floral arrangement.
							<br />
							<br />I spend my free-time wandering Leipzig and
							traversing Flower markets, in order to source the
							most beautiful specimens that I can find.
						</p>
						<Link
							to={"/contact"}
							className="btn mb-[30px] mx-auto lg:mx-0"
						>
							Hire our services
						</Link>
					</div>
					{/* Images Grid */}
					<div className="grid grid-cols-2 lg:gap-2">
						{/* Image 1 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image1}
								alt=""
							/>
						</div>
						{/* Image 2 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image2}
								alt=""
							/>
						</div>
						{/* Image 3 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image3}
								alt=""
							/>
						</div>
						{/* Image 4 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image4}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
