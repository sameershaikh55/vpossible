import React, { useState } from "react";

const ServiceCard = ({ item, i }) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			onMouseOver={() => setHover(true)}
			onMouseOut={() => setHover(false)}
			key={i}
			className="single_service col-3"
		>
			<img className="w-100" src={item.bg} alt="" />

			{(hover && (
				<div
					onMouseOver={() => setHover(true)}
					onMouseOut={() => setHover(false)}
					className="icon_para d-flex flex-column justify-content-center w-100 text-center px-4"
				>
					<p data-aos="fade" className="f14 mt-2 mb-0 text-white">
						{item.para}
					</p>
				</div>
			)) || (
				<div
					onMouseOver={() => setHover(true)}
					onMouseOut={() => setHover(false)}
					className="icon_title d-flex flex-column justify-content-center w-100 text-center"
				>
					<img data-aos="fade" src={item.icon} alt="" />
					<p data-aos="fade" className="f14 mt-2 mb-0 text-white">
						{item.title}
					</p>
				</div>
			)}
		</div>
	);
};

export default ServiceCard;
