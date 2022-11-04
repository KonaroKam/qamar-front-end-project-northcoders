import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function UserCard({ user }) {
	const { userName, setUserName } = useContext(UserContext);
	const { username, name, avatar_url } = user;

	return (
		<li className="user-card">
			<section className="user-info"><button
				onClick={() => {
					setUserName(user.username);
				}}
			>
				select
			</button>
				{" "}
				<h3 className="">{username}</h3>
				<p className="review-card__body">{name}</p>
			</section>
			
			<img className="user-img" src={avatar_url} aria-label={username} />
		</li>
	);
}
