import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();
/* createContext<string | undefined>(undefined) */

const CursorProvider = ({ children }) => {
	// Cursor Position State
	const [cursorPos, setCursorPos] = useState({
		x: 0,
		y: 0,
	});

	// Cursor Background State
	const [cursorBG, setCursorBG] = useState("default");

	useEffect(() => {
		const move = (e) => {
			setCursorPos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", move);
		// Remove Event
		return () => {
			window.removeEventListener("mousemove", move);
		};
	});

	// Cursor Variants
	const cursorVariants = {
		default: {
			x: cursorPos.x - 16,
			y: cursorPos.y - 16,
			backgroundColor: "#0e1112",
		},
		text: {
			width: "150px",
			height: "150px",
			x: cursorPos.x - 72,
			y: cursorPos.y - 72,
			backgroundColor: "#fff",
			mixBlendMode: "difference",
		},
	};

	// Mouse Enter Handler
	const mouseEnterHandler = () => {
		setCursorBG("text");
	};

	// Mouse Leave Handler
	const mouseLeaveHandler = () => {
		setCursorBG("default");
	};

	return (
		<CursorContext.Provider
			value={{
				cursorVariants,
				cursorBG,
				mouseEnterHandler,
				mouseLeaveHandler,
			}}
		>
			{children}
		</CursorContext.Provider>
	);
};

export default CursorProvider;