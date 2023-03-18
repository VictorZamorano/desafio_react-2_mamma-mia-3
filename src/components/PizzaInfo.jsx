export const PizzaInfo = (item) => {
	console.log(item.item);
	return (
		<div>
			<div className="d-flex justify-content-center align-items-center pizzaInfo ">
				<div
					className="card mb-3  bg-dark text-light border border-2 border-warning"
					style={{ maxWidth: "1100px", minHeight: "400px" }}
				>
					<div className="row g-0">
						<div className="col-md-6">
							<img
								src={item.item.img}
								className="img-fluid"
								alt={item.item.name}
								style={{ minWidth: "auto", minHeight: "100%" }}
							/>
						</div>
						<div className="col-md-6">
							<div className="card-body">
								<h5 className="card-title fs-1 text-warning text-center">
									{item.item.name.charAt(0).toUpperCase() +
										item.item.name.substr(1).toLowerCase()}
								</h5>
								<p className="card-text fs-5">{item.item.desc}</p>
								<p className="card-text fw-bold fs-4 text-danger">
									Ingredientes
								</p>
								<ul className="card-text fs-5">
									{item.item.ingredients?.map((i) => {
										return (
											<i className="bi bi-play-fill d-flex" key={i}>
												{i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()}
											</i>
										);
									})}
								</ul>
							</div>
							<div className="d-flex justify-content-around align-items-center ">
								<p className="fs-2 fw-bold m-0 text-success">
									VALOR: ${item.item.price}
								</p>
								<button
									type="button"
									className="btn btn-danger fw-bold text-light"
								>
									Agregar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
