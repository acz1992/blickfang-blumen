import { useContext } from "react";
import Image1 from "../assets/img/portfolio/reef.png";
import Image2 from "../assets/img/portfolio/retro.png";
import Image3 from "../assets/img/portfolio/studio.png";
import Image4 from "../assets/img/portfolio/summer.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)!;
	return (
		<motion.section
			initial={{ opacity: 0, y: "100%" }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: "100%" }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto h-full relative">
				<div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
					{/* Text */}
					<motion.div
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						initial={{ opacity: 0, y: "-80%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-80%" }}
						transition={transition1}
						className="flex flex-col lg:items-start"
					>
						<h1 className="h1">Portfolio</h1>
						<p className="mb-8 max-w-sm text-justify">
							We cater to a range of{" "}
							<b>different styles and event types</b>. So
							regardless as to whether you need flowers for a
							dinner or wedding, Blickfang Blumen is on hand to
							always provide for your bespoke needs.
						</p>
						<Link
							to={"/contact"}
							className="btn mb-[30px] mx-auto lg:mx-0"
						>
							Hire our services
						</Link>
					</motion.div>
					{/* Images Grid */}
					<div className="grid grid-cols-2 lg:gap-2">
						{/* Image 1 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image1}
								height={"220px"}
								width={"320px"}
								alt=""
							/>
						</div>
						{/* Image 2 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image2}
								height={"220px"}
								width={"320px"}
								alt=""
							/>
						</div>
						{/* Image 3 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image3}
								height={"220px"}
								width={"320px"}
								alt=""
							/>
						</div>
						{/* Image 4 */}
						<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
							<img
								className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
								src={Image4}
								height={"220px"}
								width={"320px"}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Portfolio;
