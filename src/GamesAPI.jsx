import axios from "axios";

const api = axios.create({
	baseURL: "https://qamars-b-end-proj-gamereviews.herokuapp.com/api",
});

// ALL GET REQUESTS

export function getReviews(category) {
	let path = `/reviews`;
	path += category ? `/?category=${category}` : "";

	return api.get(path).then(({ data }) => {
		return data.reviews;
	});
}

export function getCategories() {
	return api.get('/categories').then(({ data }) => {
		return data.categories;
	});
}


// ALL OTHER REQUESTS
