import { useState, useEffect } from "react";

import ReviewCard from "./ReviewCard";
import FilterBar from "./FilterBar";
import ReviewsNavBar from "./ReviewsNavBar";

import { getReviews } from "../GamesAPI";
import { useParams, useSearchParams } from "react-router-dom";
import Loading from "./persistent/Loading";

export default function ReviewsPage({ tag }) {
	let [searchParams, setSearchParams] = useSearchParams();
	console.log('searchParams: ', searchParams);

const { category, sort, order } = useParams();
console.log('RPAGE category, sort, order: ', category, sort, order);
	const [reviews, setReviews] = useState(null);
	const [parameters, setParameters] = useState({
		sort: "review_id",
		order: "asc",
	});

	const [isLoading, setLoading] = useState(true);
	

	useEffect(() => {
		setLoading(true);
		getReviews(category, sort, order).then((response) => {
			setReviews(response);
			setLoading(false);
		});
	}, [category, sort, order]);

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
				<FilterBar setParameters={setParameters} parameters={parameters}/>
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
