import logo from "./d20Logo.png";

export default function Header() {

	return (
		<header >
				<div className="tealBG" >
					<h1>
						Qame Reviews
						<img className="logo" alt="A 20 faced die" src={logo} />
					</h1>
					<p>Nat20 intelligence reviews only</p>
				</div>

		</header>
	);
};