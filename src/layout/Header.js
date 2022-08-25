import React from "react";
import { NavLink } from "react-router-dom";

// LAYOUT
import Nav from '../layout/Nav';

import "../assets/css/Header.css";

function Header() {
	return (
		<header>
			<div className="logo">
				<NavLink to="/">
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/Wordmark_Black_Web_360x_1_250x.png?v=1643609809" alt="Poly & Bark" />
				</NavLink>
			</div>
			<Nav />
		</header>
	)
}
export default Header;