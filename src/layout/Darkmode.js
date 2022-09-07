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
		setTimeout(function(){
			let estadoCheck = $( "#darkmode input[type=checkbox]" ).prop('checked')
			if ( estadoCheck ) {
				localStorage.setItem( "darkmode" , "si" );
				setDarkmode( "si" );
			} else {
				localStorage.setItem( "darkmode" , "no" );
				setDarkmode( "no" );
			};
			darkmode === "si" ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light")
		},500);
	};
	
	useEffect(() => {
		estadoDarkmode()
	});
	
	const Toggle = function () {
		return(
			<label>
				<input onClick={chex} type="checkbox" />
				<div className="planet"></div>
				<div className="elements">
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
					<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
						<circle cx="250" cy="250" r="200" />
					</svg>
				</div>
			</label>
		);
	};

	return (
		<section id="darkmode">
			<Toggle />
		</section>
	)
}

export default Darkmode;