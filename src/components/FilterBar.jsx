import { useEffect, useState } from "react";
import { getReviews } from "../GamesAPI";

export default function FilterBar() {
	const [formParameters, setFormParameters] = useState({
		sortField: "review_id",
		orderBy: "asc",
	});

	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getReviews().then((categories) => {
			setCategories(categories);
		});
	}, []);

	const handleChange = (key, input) => {
		setFormParameters((current) => {
			return { ...current, [key]: input };
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<form className="filter flex-col" onSubmit={handleSubmit}>
			<h3>All Available {formParameters.category} Items!</h3>
			<fieldset className="flex-row">

				<label htmlFor="sortFilter">
					Sort 
					<select
						id="sortFilter"
						type="dropdown"
						onChange={(event) => {
							handleChange("sortField", event.target.value);
						}}
						defaultValue={formParameters.sortField}
					>
						<option value="review_id">None</option>
						<option value="created_at">Date</option>
                        <option value="comment_count">Comments</option>
						<option value="votes">Votes</option>
					</select>
				</label>
				<label htmlFor="orderFilter">
					Order
					<select
						id="orderFilter"
						type="dropdown"
						onChange={(event) => {
							handleChange("orderBy", event.target.value);
						}}
						defaultValue={formParameters.orderBy}
					>
						<option value="asc">Ascending</option>
						<option value="desc">Descending</option>
					</select>
				</label>
				<button type="submit">Apply</button>
			</fieldset>
		</form>
	);
}
