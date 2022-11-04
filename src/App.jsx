import "./CSS/App.css";
import "./CSS/reusable.css";
import "./CSS/Reviews.css";
import "./CSS/Menus.css";
import "./CSS/Comments.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";

import Login from "./components/Login";
import Header from "./components/persistent/Header";
import ReviewsPage from "./components/ReviewsPage";
import SingleReview from "./components/SingleReview";

function App() {
	const [userName, setUserName] = useState();

	return (
		<UserContext.Provider value={{ userName, setUserName }}>
			<div className="App">
				<Header />
				{userName ? (
			<Routes>
			<Route
				path="/"
				element={<ReviewsPage/>}
			/>
			<Route path="/reviews/:review_id" element={<SingleReview />} />
		</Routes>
				) : (
					<Login />
				)}
			</div>
		</UserContext.Provider>
}

export default App;
