import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import FilterBar from "./FilterBar";

import { getReviews } from "../GamesAPI";

export default function ReviewsPage() {
	const [reviews, setReviews] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getReviews().then((response) => {
			console.log("reviews: ", response);
			setReviews(response);
			setLoading(false);
		});
	}, []);

	if (isLoading) return <h3>LOADING STUFF</h3>;
	return (
		<main>
			<h2 className="title">All reviews</h2>
			<section>
				<FilterBar />
				<ul className="review-list">
					{reviews.map((review) => {
						return (
							<ReviewCard review={review} key={review.review_id} />
						);
					})}
				</ul>
			</section>
		</main>
	);
}
