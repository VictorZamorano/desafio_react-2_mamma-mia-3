import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../components/Cards";
import { PizzaInfo } from "../components/PizzaInfo";
import { usePizzaContext } from "../context/PizzaContextProv";

export const Info = () => {
	const { pizzas } = usePizzaContext();

	const { id } = useParams();

	const [pInfo, setPinfo] = useState();

	const getPizza = () => {
		pizzas.map((pizza) => {
			if (pizza.id === id) {
				setPinfo(pizza);
			}
		});
	};

	useEffect(() => {
		getPizza();
	}, []);

	return <div>{!!pInfo && <PizzaInfo item={pInfo} />}</div>;
};
