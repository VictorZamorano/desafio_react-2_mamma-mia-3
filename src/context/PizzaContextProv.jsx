import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { pizzaContext } from "./Context";

export const usePizzaContext = () => useContext(pizzaContext);

export default function PizzaContextProv({ children }) {
	const [pizzas, setPizzas] = useState([]);
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const pizzasApi = "/pizzas.json";

	const addNewPizzaToCart = (pizza) => {
		const newPizzasObj = {
			id: pizza.id,
			img: pizza.img,
			name: pizza.name,
			price: pizza.price,
			quantity: 1,
		};

		setCart([...cart, newPizzasObj]);
	};

	const addCart = (pizza) => {
		let pizzaAlreadyOnCart = false;

		if (cart.length > 0) {
			cart.map((item) => {
				if (item.id === pizza.id) {
					item = { ...item, quantity: item.quantity++ };
					pizzaAlreadyOnCart = true;
					return item;
				}
			});

			if (!pizzaAlreadyOnCart) {
				addNewPizzaToCart(pizza);
			} else {
				calculateCartTotal();
			}
		} else {
			addNewPizzaToCart(pizza);
		}
	};

	const calculateCartTotal = () => {
		let total = 0;

		cart.map((order) => {
			const orderPrice = order.quantity * order.price; //11600 -> 22200
			total = total + orderPrice; //0 -> 11600 | 11600 -> 22200
		});

		setCartTotal(new Intl.NumberFormat().format(total));
	};

	const removeItemFromCart = (pizza) => {
		let indexToRemove = -1;
		cart.map((item, index) => {
			if (item.id == pizza.id) {
				if (item.quantity == 1) {
					//eliminar item encontrado
					//No terminado, se esta optimizando en otro proyecto
				}
			}
		});
	};

	useEffect(() => {
		axios.get(pizzasApi).then((response) => {
			setPizzas(response.data);
		});
	}, []);

	useEffect(() => {
		calculateCartTotal();
	}, [cart]);

	return (
		<pizzaContext.Provider
			value={{
				pizzas,
				setPizzas,
				cart,
				setCart,
				addCart,
				cartTotal,
				removeItemFromCart,
			}}
		>
			{children}
		</pizzaContext.Provider>
	);
}
