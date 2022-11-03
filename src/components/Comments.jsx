import { useEffect, useState } from "react";
import { getCommentsByReviewID } from "../GamesAPI";
import Loading from "./persistent/Loading";

export default function Comments({ review_id }) {
	const [isLoading, setLoading] = useState(true);

	const [comments, setComments] = useState(null);

	useEffect(() => {
		setLoading(true);
		getCommentsByReviewID(review_id).then((response) => {
			setComments(response);
			setLoading(false);
		});
	}, [review_id]);

	if (isLoading) return <Loading />;
	return (
		<section className="comments">
			<h2 className="listHeadings">Comments:</h2>
			{comments.map((comment) => {
				return (
					<dl className="individual__comment">
						<dd>{comment.body}</dd>
						<div className="comment-details">
						<dd className="darkLavEmoji">{comment.votes} 💚</dd>
						<dt>By {comment.author}</dt>
						<dd className="footer">
							{new Date(
								comment.created_at.replace(" ", "T")
							).toUTCString()}
						</dd></div>
					</dl>
				);
			})}
		</section>
	);
}
