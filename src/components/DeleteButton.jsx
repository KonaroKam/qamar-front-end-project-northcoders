import { deleteCommentById } from "../GamesAPI";

export default function DeleteButton({
	comment_id,
	deletedComment,
	setDeletedComment,
}) {
	const handleDelete = () => {
		setDeletedComment((current) => {
			return [...current, comment_id];
		});
		deleteCommentById(comment_id).then((response) => {
			console.log("response: ", response);
		});
	};

	return (
		<button className="deleteButton" onClick={handleDelete}>
			x DELETE
		</button>
	);
}
