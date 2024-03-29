import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Variants } from "../utils/Props";

// Menu Variants

const menuVariants: Variants = {
	hidden: {
		x: "100%",
	},
	show: {
		x: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.9],
		},
	},
};

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<nav className="text-primary xl:hidden">
			{/* Nav open Button */}
			<div
				onClick={() => setOpenMenu(true)}
				className="text-3xl cursor-pointer"
			>
				<CgMenuRight />
			</div>
			{/* Menu */}
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={openMenu ? "show" : ""}
				className="bg-[#eef7f9] shadow-2xl w-4/5 absolute top-0 right-0 mx-w-xs h-screen z-20"
			>
				{/* Icon */}
				<div
					onClick={() => setOpenMenu(false)}
					className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
				>
					<IoMdClose />
				</div>
				{/* Menu List */}
				<ul className="h-full flex flex-col justify-center items-center gap-y-8  text-primary font-primary font-bold text-3xl ">
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/">Home</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/about">About</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li onClick={() => setOpenMenu(false)}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
