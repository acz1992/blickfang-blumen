import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Variants } from "../utils/Props";

interface NavLink {
	to: string;
	text: string;
}

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

const navLinks: NavLink[] = [
	{ to: "/", text: "Home" },
	{ to: "/about", text: "About" },
	{ to: "/portfolio", text: "Portfolio" },
	{ to: "/contact", text: "Contact" },
];

const MobileNav = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const navigationRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				navigationRef.current &&
				!navigationRef.current.contains(event.target as Node)
			) {
				setOpenMenu(false);
			}
		};

		document.body.addEventListener("click", handleOutsideClick);

		return () => {
			document.body.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<nav ref={navigationRef} className="text-white xl:hidden">
			{/* Nav open Button */}
			<div
				onClick={() => setOpenMenu(true)}
				className="text-3xl cursor-pointer"
			>
				<CgMenuRight className="text-primary transition-transform transform-gpu hover:scale-125" />
			</div>
			{/* Menu */}
			<motion.div
				variants={menuVariants}
				initial="hidden"
				animate={openMenu ? "show" : ""}
				className="bg-primary shadow-2xl w-4/5 absolute top-0 right-0 mx-w-xs h-screen z-20"
			>
				{/* Icon */}
				<div
					onClick={() => setOpenMenu(false)}
					className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer transition-transform transform-gpu hover:scale-125"
				>
					<IoMdClose className="text-white" />
				</div>
				{/* Menu List */}
				<ul className="h-full flex flex-col justify-center items-center gap-y-8 font-secondary font-semibold text-3xl ">
					{navLinks.map((link, index) => (
						<li key={index} onClick={() => setOpenMenu(false)}>
							<Link
								to={link.to}
								className="group transition duration-300 relative"
							>
								{link.text}
								<span className="block absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
							</Link>
						</li>
					))}
				</ul>
			</motion.div>
		</nav>
	);
};

export default MobileNav;
