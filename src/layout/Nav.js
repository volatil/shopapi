import { NavLink } from 'react-router-dom'
import $ from "jquery";
import "../assets/css/Nav.css";

function Nav() {
	
	const anvurgeza = function () {
		$( ".menuMobile" ).toggleClass( "desplegado" );
		
		if ( $( ".menuMobile" ).attr( "class" ).includes( "desplegado" ) ) {
			$( "nav" ).addClass( "desplegado" );
			console.log( `Desplegado SI` );
		} else {
			$( "nav" ).removeClass( "desplegado" );
			console.log( `Desplegado NO` );
		};
	};
	
	return (
		<>
			<div onClick={ anvurgeza } className="menuMobile">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/todas">Productos</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/joyeria">Joyeria</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/electronica">Electrónica</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/hombre">Hombre</NavLink>
					</li>
					<li>
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/mujer">Mujer</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}
export default Nav;