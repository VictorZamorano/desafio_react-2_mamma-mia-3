//HOOKS
import { Route, Routes } from "react-router-dom";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/bootstrap-icons.svg";

// Views
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { Navbar } from "./pages/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/info/:id" element={<Info />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
