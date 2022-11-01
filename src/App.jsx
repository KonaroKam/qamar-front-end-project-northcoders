import "./CSS/App.css";
import "./CSS/reusable.css";
import "./CSS/Reviews.css";
import "./CSS/Menus.css";

import { Routes, Route } from "react-router-dom";

import Header from "./components/persistent/Header";
import ReviewsPage from "./components/ReviewsPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<ReviewsPage tag="All game reviews" />}
				/>
				<Route
					path="/category/:category"
					element={<ReviewsPage tag="Only " />}
				/>
			</Routes>
		</div>
	);
}

export default App;
