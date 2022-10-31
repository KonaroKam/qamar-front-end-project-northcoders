export default function ReviewCard({ review }) {
	const {
		review_img_url,
		title,
		// category,
		// owner,
		// designer,
		// review_id,
		review_body,
		created_at,
		comment_count,
		votes,
	} = review;

	return (
		<li className="review-card">
			<p className="review-card__title title">{title}</p>
			<img
				className="review-card__img"
				src={review_img_url}
				aria-label={title}
			/>

			<div className="review-card__info">
				<div className="interactions flex-row-wrapped">
					<p aria-label="number of likes">{votes} 💚</p>
					<p aria-label="number of comments">{comment_count} 💬</p>
					<p className="footer">
						{new Date(created_at.replace(" ", "T"))
							.toString()
							.slice(0, 33)}
					</p>
				</div>
				<p className="review-card__body">{review_body}</p>
			</div>
		</li>
	);
}
