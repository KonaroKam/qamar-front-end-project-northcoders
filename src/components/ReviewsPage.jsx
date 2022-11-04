import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import FilterBar from "./FilterBar";
import ReviewsNavBar from "./ReviewsNavBar";

import { getReviews } from "../GamesAPI";
import { useSearchParams } from "react-router-dom";

import ErrorHandler from "./persistent/ErrorHandler";
import Loading from "./persistent/Loading";

export default function ReviewsPage({ tag }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const [reviews, setReviews] = useState(null);

	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(true);

	useEffect(() => {
		setLoading(true);
		getReviews(
			searchParams.get("sort_by"),
			searchParams.get("order"),
			searchParams.get("category")
		)
			.then((response) => {
				setReviews(response);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				console.log('err IN REVIEWS: ', err);
				setError(err);
				setLoading(false);
			});
	}, [searchParams]);

	if (isLoading) return <Loading />;
	if (error) return <ErrorHandler error={error} />;

	return (
		<main>
			<div className="tealBG">
				<ReviewsNavBar
					searchParams={searchParams}
					setSearchParams={setSearchParams}
				/>
			</div>

			<h2 className="title">
				{searchParams.get("category")
					? `${searchParams.get("category")} game reviews`
					: "All game reviews"}
			</h2>

			<section>
				<FilterBar
					searchParams={searchParams}
					setSearchParams={setSearchParams}
				/>
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
