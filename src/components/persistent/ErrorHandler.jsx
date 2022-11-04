import { Link } from "react-router-dom";

export default function ErrorHandler({error}) {
	console.log('error HADNLER: ', error);
	if(!error) return(<main className="Error">
	<h2>Error...</h2>
	<h3>Status: Strayed away you have</h3>
	<h4>Try a proper path?</h4>
	<Link to="/">Navigate to home and try again...</Link>
</main>)
	return (
		<main className="Error">
			<h2>Error...</h2>
			<h3>Status: {error.response.status}</h3>
			<h4>{error.response.data.msg}</h4>
			<Link to="/">Navigate to home and try again...</Link>
		</main>
	);
}
