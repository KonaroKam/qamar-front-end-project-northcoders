import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getCommentsByReviewID } from "../GamesAPI";
import AddComment from "./AddComment";
import DeleteButton from "./DeleteButton";
import Loading from "./persistent/Loading";

export default function Comments({ review_id }) {
	const { userName } = useContext(UserContext);

	const [isLoading, setLoading] = useState(true);

	const [comments, setComments] = useState(null);
	const [deletingComment, setDeletingComment] = useState([]);
	const [deletedComment, setDeletedComment] = useState([]);

	useEffect(() => {
		setLoading(true);
		setDeletingComment([]);
		setDeletedComment([]);
		getCommentsByReviewID(review_id).then((response) => {
			setComments(response);
			setLoading(false);
		});
	}, [review_id]);

	if (isLoading) return <Loading />;
	return (
		<section className="comments">
			<h2 className="listHeadings">Comments:</h2>
			<AddComment review_id={review_id} />
			{comments.map((comment) => {
				return (
					<dl
						className="individual__comment"
						key={comment.comment_id}
					>
						<dd>{comment.body}</dd>
						<div className="comment-details">
							<dd className="darkLavEmoji">{comment.votes} 💚</dd>
							<dt>By {comment.author}</dt>
							{comment.author === userName ? (
								deletingComment.includes(comment.comment_id) ? (
									deletedComment.includes(
										comment.comment_id
									) ? (
										<h3>DELETED!!!</h3>
									) : (
										<h3>DELETING...</h3>
									)
								) : (
									<DeleteButton
										setDeletedComment={setDeletedComment}
										comment_id={comment.comment_id}
										setDeletingComment={setDeletingComment}
									/>
								)
							) : (
								""
							)}
							<dd className="footer">
								{new Date(
									comment.created_at.replace(" ", "T")
								).toUTCString()}
							</dd>
						</div>
					</dl>
				);
			})}
		</section>
	);
}
