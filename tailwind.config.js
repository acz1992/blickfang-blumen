/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			primary: "Playfair Display",
			/* secondary: "Mulish", */
			secondary: "Lora",
			tertiary: "Forum",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1192px",
		},
		extend: {
			colors: {
				/* primary: "#0E1112", */
				primary: "#e34c2d",
				grey: "#484B4B",
				background: "#cbe2ea",

				accent: "#EEF7F9",
			},
		},
	},
	plugins: [],
};
