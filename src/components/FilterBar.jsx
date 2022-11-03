import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export default function FilterBar({parameters, setParameters}) {

    const [searchParams, setSearchParams] = useSearchParams();

    const { category, sort, order } = searchParams;
    console.log(' SEARCH PARAMcategory, sort, order : ',  category, sort, order );
    console.log('searchParams: ', searchParams);

	const handleChange = (key, input) => {
		setParameters((current) => {
			return { ...current, [key]: input };
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
        setSearchParams(
            createSearchParams({sort: parameters.sort, order: parameters.order}))
	};

	return (
		<form className="filter flex-col" onSubmit={handleSubmit}>
			<h3>All Available {parameters.category} Items!</h3>
			<fieldset className="flex-row">

				<label htmlFor="sort">
					Sort 
					<select
						id="sort"
						type="dropdown"
						onChange={(event) => {
							handleChange("sort", event.target.value);
						}}
						defaultValue={parameters.sort}
					>
						<option value="review_id">None</option>
						<option value="created_at">Date</option>
                        <option value="comment_count">Comments</option>
						<option value="votes">Votes</option>
					</select>
				</label>
				<label htmlFor="order">
					Order
					<select
						id="order"
						type="dropdown"
						onChange={(event) => {
							handleChange("order", event.target.value);
						}}
						defaultValue={parameters.order}
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
