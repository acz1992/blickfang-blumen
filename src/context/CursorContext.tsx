import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();
/* createContext<string | undefined>(undefined) */

const CursorProvider = ({ children }) => {
	// Cursor Position State
	const [cursorPos, setCursorPos] = useState({
		x: 0,
		y: 0,
	});

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
	};

	return (
		<CursorContext.Provider value={{ cursorVariants }}>
			{children}
		</CursorContext.Provider>
	);
};

export default CursorProvider;
