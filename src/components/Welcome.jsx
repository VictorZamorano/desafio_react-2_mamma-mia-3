import React from "react";

export const Welcome = () => {
	return (
		<div className="welcomeBg text-light d-flex justify-content-center border-bottom">
			<div className="d-flex flex-column text-center fw-bold pt-4 w-75">
				<h1 className="fs-1">¡Pizzería Mamma Mia!</h1>
				<p className="fs-5">
					¡Tenemos las mejores pizzas que podras encontrar!
				</p>
				<hr />
			</div>
		</div>
	);
};
