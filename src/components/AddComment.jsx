import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { addCommentToReview } from "../GamesAPI";

export default function AddComment({ review_id, setReload }) {
	const [newComment, setNewComment] = useState(null);
	const [hasSubmit, setHasSubmit] = useState(false);

	const { userName } = useContext(UserContext);

	const [formParameters, setFormParameters] = useState({
		username: userName,
		body: null,
		review_id,
	});

	const [noInput, setNoInput] = useState(false);

	useEffect(() => {
		if (hasSubmit) {
			addCommentToReview(formParameters).then((response) => {
				setNewComment(response);
			});
		}
		setHasSubmit(false);
		// setFormParameters((...current) => {
		// 	return { ...current, body: null };
		// });
	}, [hasSubmit]);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('event.target[0].value: ', event.target[0].value);
		if (event.target[0].value) {
			setNoInput(false)
			setFormParameters((current) => {
				setHasSubmit(true);
				return { ...current, body: event.target[0].value };
			});
		} else {
			setNoInput(true);
		}
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
						placeholder={noInput ? "You must comment to be able to submit" : "Type here..."}
						// required
					></textarea>
					
					<button className="formButton" disabled={hasSubmit ? true: false}>SUBMIT</button>
				</form>
			) : (
				<dl className="individual__comment newComment">
					<dt className="listHeadings">
						What cool thoughts you have! See your comment below:
					</dt>
					<dd className="border">{newComment.body}</dd>
					<div className="comment-details">
						<dt>By {newComment.author}</dt>
						<dd className="footer">
							{new Date(
								newComment.created_at.replace(" ", "T")
							).toUTCString()}
						</dd>
					</div>
					<p
						onClick={() => {
							setReload(true);
						}}
					>
						Click to refresh comments
					</p>
				</dl>
			)}
		</section>
	);
}
