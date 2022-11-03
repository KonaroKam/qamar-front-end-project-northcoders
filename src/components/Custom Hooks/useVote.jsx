import { useState } from "react";
import { patchReviewVotes } from "../../GamesAPI";

export const useVote = (review_id) => {
	const [votedStatus, setVoted] = useState(false);

	const handleVote = () => {
		setVoted(!votedStatus);
		patchReviewVotes(review_id, votedStatus)
			.catch((err) => {
				setVoted(false);
			});
	};

	

	return { votedStatus, handleVote };
};
