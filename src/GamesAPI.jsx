import axios from "axios";

const api = axios.create({
	baseURL: "https://qamars-b-end-proj-gamereviews.herokuapp.com/api",
});

// ALL GET REQUESTS

export function getReviews() {
	return api.get(`/reviews`).then(({ data }) => {
		return data.reviews;
	});
}

// ALL OTHER REQUESTS
