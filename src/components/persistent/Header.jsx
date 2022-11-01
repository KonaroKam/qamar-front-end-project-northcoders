import logo from "./d20Logo.png";

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/" className="qame-reviews">
				<div className="tealBG ">
					<h1>
						Qame Reviews
						<img className="logo" alt="A 20 faced die" src={logo} />
					</h1>
					<p>Nat20 intelligence reviews only</p>
				</div>{" "}
			</Link>
		</header>
	);
}
