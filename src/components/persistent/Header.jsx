import logo from "./d20Logo.png";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

export default function Header() {
	const { userName } = useContext(UserContext);
	
	return (
		<header>
			<Link to="/" className="qame-reviews">
				<div className="tealBG ">
					<h1>
						Qame Reviews
						<img className="logo" alt="A 20 faced die" src={logo} />
					</h1>
					<p>Nat20 intelligence reviews only</p>
				</div>
			</Link>
			<h4 className="title">User {userName ? userName : "NO-ONE"}</h4>
		</header>
	);
}
