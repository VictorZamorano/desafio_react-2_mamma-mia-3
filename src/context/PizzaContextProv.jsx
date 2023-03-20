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
			const orderPrice = order.quantity * order.price;
			total = total + orderPrice;
		});

		setCartTotal(new Intl.NumberFormat().format(total));
	};

	const removeItemFromCart = (id) => {
		setCart((removePizza) => {
			if (removePizza.find((item) => item.id == id).quantity == 1) {
				return removePizza.filter((item) => item.id != id);
			} else {
				return removePizza.map((item) => {
					if (item.id == id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
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
