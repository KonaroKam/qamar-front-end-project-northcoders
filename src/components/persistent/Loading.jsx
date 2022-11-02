import logo from "./d20Logo.png";
export default function Loading() {
	return (
		<div className="loading">
			<h3>Loading...</h3>
			<img className="logoFaster" alt="A loading placeholder of a 20 faced die" src={logo} />
		</div>
	);
}
