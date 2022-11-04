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
				User verification in alpha development. Catch up with me in 1
				solar cycle for progress updates
			</h4>
            <h4>Click on your fav user to become them for deleting comments, and I suppose adding them too.</h4>
			{users.map((user) => {
				return <UserCard user={user} key={user.username} />;
			})}
		</main>
	);
}
