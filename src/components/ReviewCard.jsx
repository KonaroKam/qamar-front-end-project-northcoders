export default function ReviewCard({ review }) {
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
					className="review-img"
					src={review_img_url}
					aria-label={title}
				/>
                <div className="review-info">
				<h3>{title}</h3>
				<p>Category: {category}</p>
				<p>Owner:{owner}</p>
				<p>Designed by:{designer}</p>
				<p>Review #{review_id}</p>
				<p>{review_body.slice(0, 100)} ...</p>
				<p># of comments: {comment_count}</p>
				<p>{votes} 🧡</p>
				<p>{new Date(created_at.replace(" ", "T")).toString()}</p></div>
			</li>
		</section>
	);
}
