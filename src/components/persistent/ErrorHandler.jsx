import { Link } from "react-router-dom";

export default function ErrorHandler({error}) {
	console.log('error HADNLER: ', error);
	return (
		<main className="Error">
			<h2>Loading...</h2>
			<h3>Status: {error.status}</h3>
			<h4>{error.msg}</h4>
			<Link to="/">Navigate to home and try again...</Link>
		</main>
	);
}
