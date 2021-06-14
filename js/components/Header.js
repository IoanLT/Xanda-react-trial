import React from "react";
// Importing images
import phone from "../../assets/telephone.png";
import flag from "../../assets/flag.png";

const Header = () => {
	return (
		<nav>
			<div className="nav-link phone">
				<img src={`${phone}`} alt="phone icon" />
				<p>1337 1337 1337</p>
			</div>
			<div className="nav-link flag">
				<img src={`${flag}`} alt="flag icon" />
				<p>Try another Castle</p>
			</div>
		</nav>
	);
};

export default Header;
