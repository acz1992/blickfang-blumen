import React from "react";
import {
	ImFacebook,
	ImTwitter,
	ImPinterest,
	ImInstagram,
} from "react-icons/im";

const Socials = () => {
	return (
		<div className="hidden xl:flex ml-24">
			<ul>
				<li>
					<a href="http://www.facebook.com" target="_blank">
						<ImFacebook />
					</a>
				</li>
				<li>
					<a href="http://www.twitter.com" target="_blank">
						<ImTwitter />
					</a>
				</li>
				<li>
					<a href="http://www.pinterest.com" target="_blank">
						<ImPinterest />
					</a>
				</li>
				<li>
					<a href="http://www.instagram.com" target="_blank">
						<ImInstagram />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
