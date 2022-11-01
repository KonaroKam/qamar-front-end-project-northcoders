import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../GamesAPI";
import Loading from "./Loading";

export default function ReviewsNavBar() {
	const [isLoading, setLoading] = useState(true);
	const [isClosed, setIsClosed] = useState(true);
	const [availableCategories, setAvailableCategories] = useState(null);

	const handleClick = () => {
		setIsClosed(!isClosed);
	};

	useEffect(() => {
		setLoading(true);
		getCategories().then((response) => {
			setAvailableCategories(response);
			setLoading(false);
		});
	}, []);

	if (isLoading) return <Loading />;
	if (isClosed)
		return (
			<nav className="menuBar">
				<button onClick={handleClick}>Navigation</button>
			</nav>
		);
	return (
		<nav className="menuBar">
			<button onClick={handleClick}>Close</button>
			<div className="linkOptions">
				<Link to="/">All reviews</Link>

				{availableCategories.map((category) => {
					return (
						<Link
							to={`/category/${category.slug}`}
							key={category.slug}
						>
							{category.slug.replaceAll("-", " ")}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
