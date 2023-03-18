import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PizzaContextProv from "./context/PizzaContextProv";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<PizzaContextProv>
				<App />
			</PizzaContextProv>
		</BrowserRouter>
	</React.StrictMode>
);
