import { NavLink } from 'react-router-dom'
import $ from "jquery";
import "../assets/css/Nav.css";

function Nav() {
	
	const anvurgeza = function () {
		$( ".menuMobile" ).toggleClass( "desplegado" );
		
		if ( $( ".menuMobile" ).attr( "class" ).includes( "desplegado" ) ) {
			// Desplegado SI
			$( "nav" ).addClass( "desplegado" );
			$( "body" ).css( "overflow" , "hidden" );
			$( "body" ).append( `<div class="sombraMenu"></div>` );
		} else {
			// Desplegado NO
			$( "nav" ).removeClass( "desplegado" );
			$( "body" ).css( "overflow" , "auto" );
			$( "body .sombraMenu" ).remove();
		};
		
		$( ".sombraMenu" ).on( "click" , function(){
			$( ".menuMobile.desplegado" ).click();
		})
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
						<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/clickzapatilla">Click</NavLink>
					</li>
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