import { useEffect } from "react";
import $ from "jquery";

// COMPONENT
import Icono from "components/Icono";

// CSS
import "assets/css/WishList.css";

function WishList({ elid = "vacio" , elnombre = "no seteado" } = {}) {
	
	// megusta
	useEffect(() => {
		const losgustados = localStorage.getItem( "wishlist" );
		for ( var count = 0; count <= String( losgustados ).split( "," ).length-1; count++ ) {
			let prodId = losgustados.split( "," )[ count ];
			$( `.producto[data-id=${prodId}] section#wishlist > span` ).addClass( "megusta" )
		};
	},[])
	
	const clickWish = function () {
		localStorage.setItem( "wishlist" , localStorage.getItem( "wishlist" ) + "," + elid );
	};

	return (
		<section onClick={ clickWish } id="wishlist">
			<Icono className="wishlist" nombre="favorite" outline="true" />
		</section>
	)
}
export default WishList;