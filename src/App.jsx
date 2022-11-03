import "./CSS/App.css";
import "./CSS/reusable.css";
import "./CSS/Reviews.css";
import "./CSS/Menus.css";
import "./CSS/Comments.css"

import { Routes, Route } from "react-router-dom";

import Header from "./components/persistent/Header";
import ReviewsPage from "./components/ReviewsPage";
import SingleReview from "./components/SingleReview";

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
				<Route path="/reviews/:review_id" element={<SingleReview />} />
			</Routes>
		</div>
	);
}

export default App;
