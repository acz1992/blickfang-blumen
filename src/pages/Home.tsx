import { useContext } from "react";
import HoldingFlowers from "../assets/img/home/faceless-guy.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../utils/transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
	const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)!;
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={transition1}
			className="section"
		>
			<div className="container mx-auto h-full relative">
				{/* Text & img Wrapper */}
				<div className="flex flex-col justify-center">
					{/* Text */}
					<motion.div
						initial={{ opacity: 0, y: "-50%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-50%" }}
						transition={transition1}
						onMouseEnter={mouseEnterHandler}
						onMouseLeave={mouseLeaveHandler}
						className="w-full pt-36 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
					>
						<h1 className="h1">
							Floral Arranger <br /> & fashion lover{" "}
						</h1>
						<p className="text-[26px] lg:text-[36px] font-secondary font-normal mb-4 lg:mb-12">
							Leipzig, Germany
						</p>
						<Link to={"/contact"} className="btn mb-[30px]">
							Hire me
						</Link>
					</motion.div>
					{/* Image */}
					<div className="flex justify-end max-h-96 lg:max-h-max">
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							transition={transition1}
							className="relative lg:-right-40 overflow-hidden lg:pt-10"
						>
							<motion.img
								whileHover={{ scale: 1.1 }}
								transition={{ transition1 }}
								src={HoldingFlowers}
								height={"1037px"}
								width={"761px"}
								alt="Guy holding flowers"
								className="bg-[#eef7f9] bg-opacity-50"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Home;
