import React from "react";

const ServiceCard2 = ({ item, i }) => {
	const { bg, t, d } = item;

	return (
		<div key={i} className="col-12 col-md-6">
			<div className="service_card">
				<div className="card_bg_up position-relative">
					<img className="w-100 card_bg" src={bg} alt="" />
					<img className="icon" src={item.i} alt="" />
				</div>

				<div className="card_body">
					<h5 className="f14 mb-2">{t}</h5>
					<p className="mb-0 f14">{d}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard2;
