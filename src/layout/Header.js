import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/imagenes/logo202106030238.png";

// LAYOUT
import Nav from '../layout/Nav';

import "../assets/css/Header.css";

function Header() {
	return (
		<header>
			<div className="logo">
				<NavLink to="/">
					<img src={ Logo } alt="Poly & Bark" />
				</NavLink>
			</div>
			<Nav />
		</header>
	)
}
export default Header;