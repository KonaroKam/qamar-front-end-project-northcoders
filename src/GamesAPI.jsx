import axios from "axios";

const api = axios.create({
	baseURL: "https://qamars-b-end-proj-gamereviews.herokuapp.com/api",
});

// ALL GET REQUESTS

export function getUsers() {
	return api.get(`/users`).then(({ data }) => {
		return data.users;
	});
}

export function getReviews(sort_by, order, category) {
	return api
		.get(`/review`, { params: { category, sort_by, order } })
		.then(({ data }) => {
			console.log('data: ', data);
			return data.reviews;
		}).catch((err)=>{
			console.log('err API: ', err);
			return err
		})
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

export function getCommentsByReviewID(ID) {
	return api.get(`/reviews/${ID}/comments`).then(({ data }) => {
		return data.comments;
	});
}

// ALL OTHER REQUESTS

export function patchReviewVotes(ID, votedStatus) {
	return api
		.patch(
			`/reviews/${ID}`,
			votedStatus ? { inc_votes: -1 } : { inc_votes: 1 }
		)
		.then(({ data }) => {
			return data.updatedReview;
		});
}

export function addCommentToReview({ review_id, username, body }) {
	return api
		.post(`/reviews/${review_id}/comments`, { username, body })
		.then(({ data }) => {
			return data;
		});
}

export function deleteCommentById(ID) {
	return api.delete(`/comments/${ID}`).then(({ data }) => {
		console.log("data: ", data);
		return data;
	});
}
