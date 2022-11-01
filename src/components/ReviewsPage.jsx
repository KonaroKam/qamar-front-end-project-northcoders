import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import FilterBar from "./FilterBar";
import ReviewsNavBar from "./ReviewsNavBar";

import { getReviews } from "../GamesAPI";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function ReviewsPage({ tag }) {
	const [reviews, setReviews] = useState([{}]);
	const [isLoading, setLoading] = useState(true);
	const { category } = useParams();

	useEffect(() => {
		setLoading(true);
		getReviews(category).then((response) => {
			setReviews(response);
			setLoading(false);
		});
	}, [category]);

	if (isLoading) return <Loading />;
	return (
		<main>
			<div className="tealBG">
				<ReviewsNavBar />
			</div>

			<h2 className="title">
				{tag} {category ? `${category} game reviews` : ""}
			</h2>
			<section>
				<FilterBar />
				<ul className="review-list">
					{reviews.map((review) => {
						return (
							<ReviewCard
								review={review}
								key={review.review_id}
							/>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
