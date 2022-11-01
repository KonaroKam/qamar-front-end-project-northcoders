
export default function SingleReview({ review }) {
	const {
		review_img_url,
		title,
		category,
		owner,
		designer,
		review_id,
		review_body,
		created_at,
		comment_count,
		votes,
	} = review;

	return (
		<section className="review-card">
			<li>
				<img
					className="review__img"
					src={review_img_url}
					aria-label={title}
				/>
				<h4>{title}</h4>
				<p>Category: {category}</p>
				<p>Owner:{owner}</p>
				<p>Designed by:{designer}</p>
				<p>Review #{review_id}</p>
				<p>{review_body}</p>
				<p>{new Date(created_at.replace(" ", "T")).toString()}</p>
				<p># of comments: {comment_count}</p>
				<p>{votes} 🧡</p>
			</li>
		</section>
	);
}
