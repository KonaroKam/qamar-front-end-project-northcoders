import { useVote } from "./Custom Hooks/useVote";

export default function Votes({ review_id, votes }) {
	const { votedStatus, handleVote } = useVote(review_id);
	return (
		<button
			aria-label="button to like and current number of likes"
			onClick={handleVote}
			className="likeButton"
		>
			{votedStatus ? (
				<span className="likedEmoji">{votes + 1} 💚 </span>
			) : (
				<span className="darkLavEmoji">{votes} 💚</span>
			)}
		</button>
	);
}
