import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { addCommentToReview } from "../GamesAPI";

export default function AddComment({ review_id }) {
	const [newComment, setNewComment] = useState(null);
	const [hasSubmit, setHasSubmit] = useState(false);

	const { userName } = useContext(UserContext);


	const [formParameters, setFormParameters] = useState({
		username: userName,
		body: null,
		review_id,
	});

	useEffect(() => {
		if (hasSubmit) {
			addCommentToReview(formParameters).then((response) => {
				setNewComment(response);
			});
		}
	}, [hasSubmit]);

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormParameters((current) => {
			return { ...current, body: event.target[0].value };
		});
		setHasSubmit(true);
	};

	return (
		<section className="comments">
			{newComment === null ? (
				<form className=" commentForm flex-col" onSubmit={handleSubmit}>
					<label htmlFor="body">
						Contribute your NAT20 thoughts to the discussion:
					</label>
					<textarea
						id="newCommentBox"
						type="text"
						placeholder="Type here..."
					></textarea>
					<button className="formButton">SUBMIT</button>
				</form>
			) : (
                <dl className="individual__comment newComment">
                    <dt className="listHeadings">What cool thoughts you have! See your comment below:</dt>
					<dd >{newComment.body}</dd>
					<div className="comment-details">
						<dt>By {newComment.author}</dt>
						<dd className="footer">
							{new Date(
								newComment.created_at.replace(" ", "T")
							).toUTCString()}
						</dd>
					</div>
				</dl>
			)}
		</section>
	);
}
