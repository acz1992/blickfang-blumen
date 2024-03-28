import { useState, useEffect, createContext, ReactNode } from "react";

interface CursorContextType {
	cursorVariants: Record<string, object>;
	cursorBG: string;
	mouseEnterHandler: () => void;
	mouseLeaveHandler: () => void;
}

export const CursorContext = createContext<CursorContextType | undefined>(
	undefined
);

const CursorProvider = ({ children }: { children: ReactNode }) => {
	// Cursor Position State
	const [cursorPos, setCursorPos] = useState({
		x: 0,
		y: 0,
	});

	// Cursor Background State
	const [cursorBG, setCursorBG] = useState("default");

	const mobileViewportIsActive = window.innerWidth < 768;

	useEffect(() => {
		if (!mobileViewportIsActive) {
			const move = (e: MouseEvent) => {
				setCursorPos({ x: e.clientX, y: e.clientY });
			};
			window.addEventListener("mousemove", move);
			// Remove Event
			return () => {
				window.removeEventListener("mousemove", move);
			};
		} else {
			setCursorBG("none");
		}
	}, [mobileViewportIsActive]);

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
		none: {
			width: 0,
			height: 0,
			backgroundColor: "rgba(255, 255, 255, 1)",
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
