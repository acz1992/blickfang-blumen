import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const portfolioGallery = () => {
	console.log("Portfolio Gallery rendered");
	return (
		<Carousel showArrows>
			<div>
				<img src="src/assets/img/portfolio/reef.png" />
			</div>
			<div>
				<img src="src/assets/img/portfolio/retro.png" />
			</div>
			<div>
				<img src="src/assets/img/portfolio/studio.png" />
			</div>
			<div>
				<img src="src/assets/img/portfolio/summer.png" />
			</div>
		</Carousel>
	);
};

export default portfolioGallery;
