// import { useEffect } from "react";
import $ from "jquery";

// COMPONENT
import Icono from "components/Icono";

// CSS
import "assets/css/WishList.css";

// HELPERS
import { megusta , ordenaComas , toggleClassMegusta , eliminaIDfavorito } from "helpers/functions";

function WishList({ elid = "vacio" } = {}) {
	
	const clickModifyWishList = function () {
		console.log( `id: ${elid}` );
		
		let lasclases = $( `section#wishlist[data-id='${ elid }']` ).find( "span" ).attr( "class" );
		
		if ( localStorage.getItem( "wishlist" ) ) {
		
			if ( lasclases.includes( "simegusta" ) ) {
				console.log( `Eliminado ${elid}` );
				eliminaIDfavorito( elid );
			} else {
				console.log( `Agregando ${elid}` );
				localStorage.setItem( "wishlist" , localStorage.getItem( "wishlist" ) + "," + elid );
			}
			toggleClassMegusta( elid );
			ordenaComas();
		} else {
			if ( lasclases.includes( "simegusta" ) ) {
				console.log( `Eliminado ${elid}` );
				eliminaIDfavorito( elid );
			} else {
				console.log( `Agregando ${elid}` );
				localStorage.setItem( "wishlist" , elid );
			}
			toggleClassMegusta( elid );
		}
	};
	
	return (
		<section data-id={ elid } onClick={ clickModifyWishList } id="wishlist">
			<Icono className={`wishlist ${ megusta( elid ) }`} nombre="favorite" outline="true" />
		</section>
	)
}
export default WishList;