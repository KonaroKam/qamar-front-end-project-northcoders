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
	return <dl>
        <dt>Comments:</dt>
        {comments.map((comment)=>{return <dt>potato</dt>})}</dl>;
}
