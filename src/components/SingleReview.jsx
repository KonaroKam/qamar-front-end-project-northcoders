import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewByID } from "../GamesAPI";
import Loading from "./persistent/Loading";

export default function SingleReview() {
	const { review_id } = useParams();
	const [isLoading, setLoading] = useState(true);
	const [isAbsolute, setIsAbsolute] = useState(false);

	const [singleReview, setSingleReview] = useState(null);
	console.log("singleReview: ", singleReview);

	const handleImgClick = () => {
		setIsAbsolute(!isAbsolute);
	};

	useEffect(() => {
		setLoading(true);
		getReviewByID(review_id).then((response) => {
			setSingleReview(response);
			console.log("response: ", response);
			setLoading(false);
		});
	}, [review_id]);
	// let {		review_body,
	// 	review_img_url,
	// 	title,
	// 	votes,
	// 	owner,
	// 	designer,
	// 	created_at,
	// 	category,
	// 	comment_count,
	// } = singleReview;

	if (isLoading) return <Loading />;
	return (
		<section className="single-review-card ">
			<div className="review-card__title single">
				<h2>{singleReview.title}</h2>
				<img
					className={
						isAbsolute
							? " single__img absolute"
							: " single__img"
					}
					src={singleReview.review_img_url}
					aria-label={singleReview.title}
					onClick={handleImgClick}
				/>
			</div>
			<p>Review #{review_id}</p>
			<p aria-label="number of comments">
				{singleReview.comment_count} 💬
			</p>
			<p aria-label="number of likes and comments">
				{singleReview.votes} 💚
			</p>
			<p>Category: {singleReview.category}</p>
			<p>Owner:{singleReview.owner}</p>
			<p>Designed by:{singleReview.designer}</p>
			<p>
				{new Date(
					singleReview.created_at.replace(" ", "T")
				).toUTCString()}
			</p>
			<p>{singleReview.review_body}</p>
		</section>
	);
}
