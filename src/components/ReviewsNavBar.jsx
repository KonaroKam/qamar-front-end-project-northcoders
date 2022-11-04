import { useEffect, useState } from "react";
import { getCategories } from "../GamesAPI";
import ErrorHandler from "./persistent/ErrorHandler";
import Loading from "./persistent/Loading";

export default function ReviewsNavBar({ setSearchParams, searchParams }) {
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(true);

	const [isClosed, setIsClosed] = useState(true);
	const [availableCategories, setAvailableCategories] = useState(null);

	const handleClick = () => {
		setIsClosed(!isClosed);
	};
	const handleCategoryChange = (event) => {
		searchParams.set("category", event.target.value);
		setSearchParams(searchParams);
	};

	const handleCategoryRemove = () => {
		searchParams.delete("category");
		setSearchParams(searchParams);
	};

	useEffect(() => {
		setLoading(true);
		getCategories()
			.then((response) => {
				setAvailableCategories(response);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError(err);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <Loading />;
	if (error) return <ErrorHandler error={error} />;
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
				<button onClick={handleCategoryRemove}>All Reviews</button>
				{availableCategories.map((category) => {
					return (
						<button
							key={category.slug}
							onClick={handleCategoryChange}
							value={category.slug}
						>
							{category.slug.replaceAll("-", " ")}
						</button>
					);
				})}
			</div>
		</nav>
	);
}
