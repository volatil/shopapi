import { useState } from "react";
import "../assets/css/Darkmode.css"

function Darkmode() {
	
	const [ darkmode , setDarkmode ] = useState();

	const tecleo = function ( loescrito ) {
		setDarkmode( loescrito.target.value )
	};
	
	const Darc = function () { 
		darkmode === "si" ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
	};

	return (
		<section id="darkmode">
			<h1>DarkMode</h1>
			<input onChange={tecleo} />
			<Darc />
		</section>
	)
}

export default Darkmode;