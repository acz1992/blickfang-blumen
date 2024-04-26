import React from "react";

interface PortfolioImageProps {
	src: string;
}

const PortfolioImage: React.FC<PortfolioImageProps> = ({ src }) => {
	return <img src={src} alt="Portfolio Image" />;
};

export default PortfolioImage;
