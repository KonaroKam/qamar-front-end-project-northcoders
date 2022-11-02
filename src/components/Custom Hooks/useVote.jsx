import { useEffect, useState } from "react";
import { patchReviewVotes } from "../../GamesAPI";

export const useVote = (review_id) => {
	const [voted, setVoted] = useState(false);

	const handleVote = () => {
		setVoted(!voted);
		patchReviewVotes(review_id, voted)
			.then((data) => {
				console.log("data: ", data);
			})
			.catch((err) => {
				setVoted(false);
			});
	};

	return { voted, handleVote };
};
