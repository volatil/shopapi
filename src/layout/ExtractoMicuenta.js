import { useState , useEffect } from "react";

// COMPONENTS
import Loading from "../components/Loading/Loading";

function ExtractoMicuenta() {
	
	const [ traeUsuario , setTraeUsuario ] = useState();
	const [ loading , setLoading ] = useState( false );

	useEffect(() => {
		
		setLoading( true )
		
		const api = "https://fakestoreapi.com/users/8";
		fetch( api ).then( api => api.json() )
		.then( x => {
			// console.log( x );
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
				"imagen" : "https://yt3.ggpht.com/ytc/AMLnZu_tNjLFoWptbQBOgLaJ-Ij5QLUZY_46LH_T7mN1Hg=s900-c-k-c0x00ffffff-no-rj" ,
			});
			setTraeUsuario( todo )
			setLoading( false )
		});

	},[]);

	if ( loading ) {
		return (
			<div className="desplegado">
				<Loading />
			</div>
		);
	};

	return (
		<div className="desplegado micuenta">
			{
				traeUsuario?.map((u) => {
					return(
						<div key={ u.id }>
							<img src={ u.imagen } alt={ u.id } />
							<h4>{ u.nombre } { u.apellido }</h4>
							<p>
								<a href={`mailto:${ u.correo }`}>{ u.correo }</a>
							</p>
						</div>
					)
				})
			}
		</div>
	)
}
export default ExtractoMicuenta;