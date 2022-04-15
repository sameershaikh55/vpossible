import React from "react";

const CommonBanner = ({ banner }) => {
	const { mainClass, aboveTitle, title, belowTitle } = banner;

	return (
		<div className={mainClass}>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 mx-auto">
							<div className="innerServiceContainer">
								<h6 className="text-uppercase textColor2 f600 text-center f14 mb-2">
									{aboveTitle}
								</h6>
								<h1 className="text-white text-center f800 f32 mb-3">
									{title}
								</h1>
								<div
									dangerouslySetInnerHTML={{ __html: belowTitle }}
									className="textColor2 text-center f16 mb-0"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommonBanner;
