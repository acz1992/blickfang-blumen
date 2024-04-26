import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PortfolioGallery = () => {
	return (
		<Carousel
			showArrows
			showStatus={false}
			autoPlay
			infiniteLoop
			stopOnHover
			/* className="object-cover hover:scale-110 transition-all duration-1000" */
		>
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

export default PortfolioGallery;
