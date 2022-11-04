export default function FilterBar({ searchParams, setSearchParams }) {
	const handleChange = (key, input) => {
		searchParams.set(key, input);
		setSearchParams(searchParams);
	};

	return (
		<form className="filterBar flex-row">
			<fieldset >
				<label htmlFor="sort_by">Sorted by</label>
				<select
					id="sort_by"
					type="dropdown"
					onChange={(event) => {
						handleChange("sort_by", event.target.value);
					}}
					defaultValue={searchParams.get("sort_by")}
				>
					<option value="created_at">Date added</option>
					<option value="comment_count">Comments</option>
					<option value="votes">Votes</option>
					<option value="title">Title</option>
					<option value="review_id">Pseudo Random</option>
				</select>
			</fieldset>
			<fieldset>
				<label htmlFor="order">Order</label>
				<select
					id="order"
					type="dropdown"
					onChange={(event) => {
						handleChange("order", event.target.value);
					}}
					defaultValue={searchParams.get("order")}
				>
					<option value="desc">Descending</option>
					<option value="asc">Ascending</option>
				</select>
			</fieldset>
		</form>
	);
}
