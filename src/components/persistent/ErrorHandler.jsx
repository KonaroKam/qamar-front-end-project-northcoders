import { Link } from "react-router-dom";

export default function ErrorHandler({ error }) {
	console.log("error HADNLER: ", error);

	return (
		<Link to="/">
			<main className="error">
				<h2>Error...</h2>
				{!error ? (
					<>
						<h3>
							Status: It seems you have strayed away from the
							beaten path
						</h3>
						<h4>Alas there is no more path to proceed</h4>
					</>
				) : (
					<>
						<h3>Status: {error.response.status}</h3>
						<h4>{error.response.data.msg}</h4>
					</>
				)}
				Click anywhere to be sent home to try again...
			</main>
		</Link>
	);
}
