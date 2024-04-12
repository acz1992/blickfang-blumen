import Socials from "./Socials";
/* import Logo from "../assets/img/header/logo.svg"; */
import Logo from "../assets/img/header/blicklogo.png";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

interface NavLink {
	to: string;
	text: string;
}

const Header: React.FC = () => {
	// Define an array of objects representing navigation links
	const navLinks: NavLink[] = [
		{ to: "/", text: "Home" },
		{ to: "/about", text: "About" },
		{ to: "/portfolio", text: "Portfolio" },
		{ to: "/contact", text: "Contact" },
	];

	return (
		<header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
			<div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
				{/* Logo */}
				<Link to={"/"} className="max-w-[200px]">
					<img src={Logo} alt="" />
				</Link>
				{/* nav - initially hidden - show on desktop mode */}
				<nav className="hidden xl:flex gap-x-12 font-semibold">
					{navLinks.map((link, index) => (
						<Link
							key={index}
							to={link.to}
							className="text-primary group transition duration-300 relative"
						>
							{link.text}
							<span className="block absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
						</Link>
					))}
				</nav>
			</div>
			{/* Socials */}
			<Socials />
			{/* Mobile Nav */}
			<MobileNav />
		</header>
	);
};

export default Header;
{
	/* <Link
								key={index}
								onClick={handleCloseMenu}
								to={item.link}
								className="group transition duration-300 relative"
							>
								{item.title}
								<span className="block absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
							</Link> */
}
