import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewByID } from "../GamesAPI";
import Comments from "./Comments";
import Loading from "./persistent/Loading";
import Votes from "./Votes";

export default function SingleReview() {
	const { review_id } = useParams();
	const [isLoading, setLoading] = useState(true);
	const [isAbsolute, setIsAbsolute] = useState(false);

	const [singleReview, setSingleReview] = useState(null);

	const handleImgClick = () => {
		setIsAbsolute(!isAbsolute);
	};

	useEffect(() => {
		setLoading(true);
		getReviewByID(review_id).then((response) => {
			setSingleReview(response);
			setLoading(false);
		});
	}, [review_id]);

	if (isLoading) return <Loading />;
	return (
		<main className="single-review-card flex-col flex-center">
			<div className="review-card__title single">
				<figure
					className={
						isAbsolute ? "absolute single__img " : " single__img"
					}
				>
					<figcaption>
						{isAbsolute
							? "click image to close"
							: "scroll through. and click image to enlarge"}
					</figcaption>
					<img
						className="single__img"
						src={singleReview.review_img_url}
						aria-label={singleReview.title}
						onClick={handleImgClick}
					/>
				</figure>
			</div>
			<h2 className="review-card__title center">{singleReview.title}</h2>
			<section className="info flex-col flex-center">
				<dl className="flex-col review__info">
					<dt className="listHeadings">Review #{review_id}</dt>
					<dd>
						Review of {singleReview.category} game / Designed by{" "}
						{singleReview.designer}
					</dd>
					<dd>
						By {singleReview.owner} / On{" "}
						{new Date(
							singleReview.created_at.replace(" ", "T")
						).toUTCString()}
					</dd>
				</dl>
				<div className="review-body">
					<dd>
						<Votes
							review_id={review_id}
							votes={singleReview.votes}
						/>

						<p aria-label="number of comments" className="darkLavEmoji">
							{singleReview.comment_count} 💬
						</p>
					</dd>
					<dt className="listHeadings">Review:</dt>
					<dd className="justified">{singleReview.review_body}</dd>
					<Comments review_id={review_id} />
				</div>
			</section>
		</main>
	);
}
