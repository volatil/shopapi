import { useEffect, useState } from "react";
import $ from "jquery";
import "../assets/css/Darkmode.css"

function Darkmode() {
	
	const [ darkmode , setDarkmode ] = useState();

	const estadoDarkmode = function () {
		let estado = localStorage.getItem( "darkmode" );
		if ( estado ) {
			// SI EXISTE
			setDarkmode( estado );
			if ( estado === "si" ) {
				$( "#darkmode input[type=checkbox]" ).prop( "checked" , true );
			} else {
				$( "#darkmode input[type=checkbox]" ).prop( "checked" , false );
			};
		} else {
			//NO EXISTE
			localStorage.setItem( "darkmode" , "no" );
		};
		darkmode === "si" ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
	};
	
	const chex = function () {
		let estadoCheck = $( "#darkmode input[type=checkbox]" ).prop('checked')
		if ( estadoCheck ) {
			localStorage.setItem( "darkmode" , "si" );
			setDarkmode( "si" );
		} else {
			localStorage.setItem( "darkmode" , "no" );
			setDarkmode( "no" );
		};
		darkmode === "si" ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
	};
	
	useEffect(() => {
		estadoDarkmode()
	})

	return (
		<section id="darkmode">
			<h1>DarkMode</h1>
			<input onClick={chex} type="checkbox" />
		</section>
	)
}

export default Darkmode;