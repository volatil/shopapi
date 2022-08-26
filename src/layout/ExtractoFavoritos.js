import { useState , useEffect } from "react";

// COMPONENTS
import Loading from "../components/Loading/Loading";

function ExtractoMicuenta() {
	
	const [ traeUsuario , setTraeUsuario ] = useState();
	const [ loading , setLoading ] = useState( false );

	useEffect(() => {
		
		setLoading( true )
		
		setLoading( false )

	},[]);

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
		</div>
	)
}
export default ExtractoMicuenta;