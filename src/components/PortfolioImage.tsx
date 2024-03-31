import React from "react";

interface PortfolioImageProps {
	src: string;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ src }) => {
	return (
		<div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
			<img
				className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
				src={src}
				height={"220px"}
				width={"320px"}
				alt="Portfolio Image"
			/>
		</div>
	);
};

export default PortfolioImage;
