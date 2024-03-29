import React from "react";
import {
	ImFacebook,
	ImTwitter,
	/* ImPinterest, */
	ImInstagram,
} from "react-icons/im";

const Socials = () => {
	return (
		<div className="hidden xl:flex ml-24">
			<ul className="flex gap-x-4 ">
				<li>
					<a
						href="http://www.facebook.com"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImFacebook />
					</a>
				</li>
				<li>
					<a
						href="http://www.twitter.com"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImTwitter />
					</a>
				</li>
				{/* 	<li>
					<a
						href="http://www.pinterest.com"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImPinterest />
					</a>
				</li> */}
				<li>
					<a
						href="http://www.instagram.com"
						target="_blank"
						className="hover:opacity-50 transition"
					>
						<ImInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
