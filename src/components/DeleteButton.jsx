import { deleteCommentById } from "../GamesAPI";

export default function DeleteButton({
	comment_id,

	setDeletedComment,
	setDeletingComment,
}) {
	const handleDelete = () => {
		setDeletingComment((current) => {
			return [...current, comment_id];
		});
		deleteCommentById(comment_id).then((response) => {
            setDeletedComment((current) => {
                return [...current, comment_id];
            });
			console.log("response: ", response);
		});
	};

	return (
		<button className="deleteButton" onClick={handleDelete}>
			x DELETE
		</button>
	);
}
