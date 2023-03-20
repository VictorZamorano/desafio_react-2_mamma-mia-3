import { usePizzaContext } from "../context/PizzaContextProv";

export const Cards = ({ pizzas, handleClick, handleAdd }) => {
	const { addCart } = usePizzaContext();

	return (
		<div className="container mt-5">
			<div className="row row-cols-md-2 gap-3 ">
				{pizzas?.map((pizza) => {
					return (
						<div className="row " key={pizza.id}>
							<div
								className="card mb-3 p-0 bg-dark text-light border border-2 border-warning shadowCard"
								style={{ maxWidth: "540px" }}
							>
								<div className="row g-0">
									<div className="col-md-6 ">
										<img
											src={pizza.img}
											className="img-fluid rounded-start"
											alt={pizza.name}
											style={{ minWidth: "auto", minHeight: "100%" }}
										/>
									</div>
									<div className="col-md-6">
										<div className="card-body">
											<h5 className="card-title text-warning fw-bold fs-3 text-center">
												{pizza.name.charAt(0).toUpperCase() +
													pizza.name.substr(1).toLowerCase()}
											</h5>
											<p className="card-text text-danger fw-bold fs-5">
												Ingredientes
											</p>
											<ul className="card-text">
												{pizza.ingredients?.map((i) => {
													return (
														<i key={i} className="bi bi-play-fill d-flex pt-1">
															{i.charAt(0).toUpperCase() +
																i.substr(1).toLowerCase()}
														</i>
													);
												})}
											</ul>
											<p className="card-text text-center fs-4 fw-bold">
												Valor: ${new Intl.NumberFormat().format(pizza.price)}
											</p>
											<div className="d-flex justify-content-between">
												<button
													type="button"
													className="btn btn-warning fw-bold text-dark"
													value={pizza.id}
													onClick={handleClick}
												>
													Ver más
												</button>
												<button
													type="button"
													className="btn btn-success fw-bold text-light"
													value={pizza.id}
													onClick={() => addCart(pizza)}
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
				})}
			</div>
		</div>
	);
};
