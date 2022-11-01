export default function ReviewCard({ review }) {
	const {
		review_img_url,
		title,
		review_body,
		created_at,
		comment_count,
		votes,
	} = review;

	return (
		<li className="review-card">
			<div className="review-card__title title">
				<p>{title}</p>
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
					<p aria-label="number of likes and comments">{votes} 💚</p>
					<p aria-label="number of comments">{comment_count} 💬</p>
					<p className="footer">
						{new Date(created_at.replace(" ", "T")).toString()}
					</p>
				</div>
			</div>
		</li>
	);
}
