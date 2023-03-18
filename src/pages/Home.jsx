import { useNavigate } from "react-router-dom";
import { Cards } from "../components/Cards";
import { Welcome } from "../components/Welcome";

import { usePizzaContext } from "../context/PizzaContextProv";

export const Home = () => {
	const infoNavigate = useNavigate();

	const { pizzas } = usePizzaContext();

	const handleClick = (e) => {
		infoNavigate(`/info/${e.target.value}`);
	};

	return (
		<div>
			<Welcome />
			<Cards pizzas={pizzas} handleClick={handleClick} />
		</div>
	);
};
