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
export function getReviewByID(ID) {
	return api.get(`/reviews/${ID}`).then(({ data }) => {
		return data.review;
	});
}

export function getCategories() {
	return api.get("/categories").then(({ data }) => {
		return data.categories;
	});
}

// ALL OTHER REQUESTS

export function patchReviewVotes(ID, voted) {
	return api
		.patch(`/reviews/${ID}`, voted ? { inc_votes: -1 } : { inc_votes: 1 })
		.then(({ data }) => {
			return data.updatedReview;
		});
}
