import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function UserCard({ user }) {
	const { userName, setUserName } = useContext(UserContext);
	const { username, name, avatar_url } = user;

	return (
		<div className="user-card" onClick={() => {
						setUserName(user.username);
					}}>
				{/* <button
				className="user-button"
					
				>
					select
				</button> */}
				<img className="user-img" src={avatar_url} aria-label={username} />
			<section className="user-info">
				<h2 className="">{username}</h2>
				<p className="review-card__body">{name}</p>
			</section>

		</div>
	);
}
