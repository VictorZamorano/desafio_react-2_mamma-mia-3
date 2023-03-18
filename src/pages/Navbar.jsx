import { NavLink } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaContextProv";

export const Navbar = () => {
	const { cartTotal } = usePizzaContext();

	return (
		<div className="bg-dark d-flex justify-content-between sticky-top border-bottom border-warning navbar">
			<NavLink to={"/"} className="navLink">
				<div className="d-flex justify-content-center align-items-center pt-1">
					<img src="./iconPizza.png" alt="pizza" className="iconPizza ms-4" />
					<h4>Pizzeria Mamma Mia!</h4>
				</div>
			</NavLink>
			<NavLink to={"/cart"} className="navLink">
				<div className="d-flex justify-content-center align-items-center me-5">
					<i className="bi bi-cart3 fs-3"></i>
					<h4 className="pt-1">Total: $ {cartTotal}</h4>
				</div>
			</NavLink>
		</div>
	);
};
