import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, i }) => {
	return (
		<Link
			to="/service"
			key={i}
			className="single_service col-12 col-sm-6 col-md-3"
		>
			<img className="w-100" src={item.bg} alt={item.title} />

			<div className="icon_para flex-column justify-content-center w-100 text-center">
				<p data-aos="fade" className="f14 mb-0 text-white">
					{item.para}
				</p>
			</div>
			<div className="icon_title flex-column justify-content-center w-100 text-center">
				<img data-aos="fade" src={item.icon} alt={item.title} />
				<p data-aos="fade" className="f14 mt-2 mb-0 text-white">
					{item.title}
				</p>
			</div>
		</Link>
	);
};

export default ServiceCard;
