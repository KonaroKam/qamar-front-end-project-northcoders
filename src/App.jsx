import "./CSS/App.css";
import "./CSS/reusable.css";
import "./CSS/Reviews.css";

import Header from "./components/persistent/Header";
import ReviewsPage from "./components/ReviewsPage";

function App() {
	return (
		<div className="App">
			<Header />
			<ReviewsPage />
		</div>
	);
}

export default App;
