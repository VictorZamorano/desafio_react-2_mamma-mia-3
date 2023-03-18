import { usePizzaContext } from "../context/PizzaContextProv";

export const Shopping = () => {
	const { cart, removeItemFromCart, addCart } = usePizzaContext();
	const { cartTotal } = usePizzaContext();

	console.log(cart);
	return (
		<div className="d-flex flex-column align-items-center ">
			{cart?.map((purchased) => {
				return (
					<ul className="list-group w-75 " key={purchased.id}>
						<li className="list-group-item d-flex justify-content-between bg-dark text-light p-0 mb-3 border border-2 border-warning">
							<div className="shoppingImg d-flex">
								<img
									src={purchased.img}
									alt="purchased-pizza"
									className="img-fluid"
								/>
								<p className="fs-3 ms-3 fs-2 fw-bold d-flex align-items-center text-warning">
									{purchased.name.charAt(0).toUpperCase() +
										purchased.name.substr(1).toLowerCase()}
								</p>
							</div>
							<div className="d-flex align-items-center justify-content-center flex-column me-5">
								<div className="countHandler d-flex">
									<button
										onClick={() => removeItemFromCart(purchased)}
										className="btn btn-danger"
									>
										-
									</button>
									<input
										type="number"
										readOnly
										value={purchased.quantity}
										className="form-control text-center pizzaQuantityInput p-0 ms-1 me-1"
									/>
									<button
										onClick={() => addCart(purchased)}
										className="btn btn-primary"
									>
										{" "}
										+{" "}
									</button>
								</div>
								<p className="m-0 fs-3 fw-bold text-success ">
									Valor: $ {purchased.price}
								</p>
							</div>
						</li>
					</ul>
				);
			})}
			<div className="d-flex flex-column w-25 text-center">
				<div className="bg-dark border border-2 border-warning rounded mb-2 text-light">
					<h2>Total: ${cartTotal}</h2>
				</div>
				<button type="btn" className="btn btn-success">
					Go to buy
				</button>
			</div>
		</div>
	);
};
