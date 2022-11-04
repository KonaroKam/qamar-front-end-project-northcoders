import { deleteCommentById } from "../GamesAPI";

export default function DeleteButton({ comment_id, deletedComment,setDeletedComment }) {
	const handleDelete = () => {
		deleteCommentById(comment_id).then((response) => {
			console.log("response: ", response);
			setDeletedComment(comment_id);
		});
	};


	return (
		<button className="deleteButton" onClick={handleDelete}>
			x DELETE
		</button>
	);
}
