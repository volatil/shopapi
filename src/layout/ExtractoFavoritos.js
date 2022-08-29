import { useState , useEffect } from "react";

// COMPONENTS
import Loading from "../components/Loading/Loading";

function ExtractoMicuenta() {
	
	const [ traeUsuario , setTraeUsuario ] = useState();
	const [ loading , setLoading ] = useState( false );

	useEffect(() => {
		
		setLoading( true )
		if ( !localStorage.getItem( "wishlista" ) ) {
			setTraeUsuario( "NO hay Favoritos 😢" );
		} else {
			setTraeUsuario( "SI hay Favoritos 🥳" );
		}
		setLoading( false )

	},[setTraeUsuario]);

	if ( loading ) {
		return (
			<div className="desplegado favoritos">
				<Loading />
			</div>
		);
	};

	return (
		<div className="desplegado favoritos">
			<h2>Favoritito ito 😎</h2>
			{
				console.log( traeUsuario )
			}
		</div>
	)
}
export default ExtractoMicuenta;