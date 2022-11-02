import { Link } from "react-router-dom";
import { useVote } from "./Custom Hooks/useVote";

export default function ReviewCard({ review }) {
	const {
		review_img_url,
		review_id,
		title,
		review_body,
		created_at,
		comment_count,
		votes,
	} = review;

	const { voted, handleVote } = useVote(review_id);

	return (
		<li className="review-card ">
			<div className="review-card__title title">
				<Link to={`/reviews/${review_id}`}>
					<p className="">{title}</p>
				</Link>
			</div>
			<img
				className="review-card__img"
				src={review_img_url}
				aria-label={title}
			/>

			<div className="review-card__info">
				<div>
					<p className="review-card__body">{review_body}</p>
				</div>
				<div className="interactions">
					<button aria-label="number of likes" onClick={handleVote}>
						{voted ? `${votes + 1} 💚` : `${votes} 🤍`}
					</button>
					<p aria-label="number of comments">{comment_count} 💬</p>
					<p className="footer">
						{new Date(created_at.replace(" ", "T")).toUTCString()}
					</p>
				</div>
			</div>
		</li>
	);
}
