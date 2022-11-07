import { useEffect, useState } from "react";
import { getUsers } from "../GamesAPI";
import UserCard from "./userCard";
import Loading from "./persistent/Loading";

export default function Header() {
	const [isLoading, setLoading] = useState(true);
	const [users, setUsers] = useState();

	useEffect(() => {
		setLoading(true);

		getUsers().then((response) => {
			setUsers(response);
			setLoading(false);
		});
	}, []);

	if (isLoading) return <Loading />;
	return (
		<main className="userspage">
			<h2>Available Users</h2>
			<h4>
				Click on your favourite to become them to enable certain features.
			</h4>
			<section className="usercardsection">
				{users.map((user) => {
					return <UserCard user={user} key={user.username} />;
				})}
			</section>
		</main>
	);
}
