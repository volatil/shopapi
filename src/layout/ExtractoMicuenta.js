import { useState , useEffect } from "react";

// COMPONENTS
import Loading from "../components/Loading/Loading";

function ExtractoMicuenta() {
	
	const [ traeUsuario , setTraeUsuario ] = useState();
	const [ loading , setLoading ] = useState( false );

	useEffect(() => {
		
		setLoading( true )
		
		const api = "https://fakestoreapi.com/users/6";
		fetch( api ).then( api => api.json() )
		.then( x => {
			console.log( x );
			var todo = [];
			var usuario = {
				"id" : x.name.id ,
				"nombre" : x.name.firstname ,
				"apellido" : x.name.lastname ,
				"correo" : x.email ,
			};
			todo.push({
				"id" : usuario.id ,
				"nombre" : usuario.nombre ,
				"apellido" : usuario.apellido ,
				"correo" : usuario.correo ,
			});
			setTraeUsuario( todo )
			setLoading( false )
		});

	},[]);

	if ( loading ) {
		return (
			<div className="desplegado">
				{/* <HelmetResumen title="Cargando Color ..." />
				<h2>
					<Icono nombre="palette" />
					Color Random
				</h2> */}
				<Loading />
			</div>
		);
	};

	return (
		<div className="desplegado">
			{
				traeUsuario?.map((u) => {
					return(
						<>
							<h4 style={{ textTransform: "capitalize" , textAlign: "right" , margin: "10px 20px 0 0" , fontWeight: "400" , fontSize: "1.5em" }}>{ u.nombre } { u.apellido }</h4>
							<p style={{ textAlign: "right" , margin: "10px 20px 0 0" }}>
								<a href={`mailto:${ u.correo }`}>{ u.correo }</a>
							</p>
						</>
					)
				})
			}
		</div>
	)
}
export default ExtractoMicuenta;