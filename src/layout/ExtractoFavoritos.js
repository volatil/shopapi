import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS
import Loading from "../components/Loading/Loading";
import WishList from "components/WishList";

function ExtractoMicuenta() {
	
	const [ traeUsuario , setTraeUsuario ] = useState();
	const [ loading , setLoading ] = useState( false );

	useEffect(() => {
		
		setLoading( true )
		let losID = localStorage.getItem( "wishlist" );
		var todo = [];
		for ( var count = 0; count <= losID.split(",").length-1; count++ ) {
			let idSolo = losID.split(",")[ count ];
			const api = `https://fakestoreapi.com/products/${ idSolo }`;
			fetch( api ).then( api => api.json() )
			.then( x => {
				var resumen = x;
				var prod = {
					"id" : resumen.id ,
					"nombre" : resumen.title ,
					"categoria" : resumen.category ,
					"descripcion" : resumen.description ,
					"precio" : function(){
						let precio = resumen.price;
						precio = precio * 918;
						precio = String(precio).split( "." )[0];
						precio = Number(precio).toLocaleString('es-CL');
						return precio;
					},
					"imagen" : resumen.image ,
				}
				todo.push({
					"id" : prod.id ,
					"nombre" : prod.nombre ,
					"categoria" : prod.categoria ,
					"descripcion" : prod.descripcion ,
					"precio" : prod.precio() ,
					"imagen" : prod.imagen ,
				});
				setTraeUsuario( todo )
			})
		};
		setTimeout(function(){
			setLoading( false )
		},1000)
	
	},[]);

	if ( loading ) {
		return (
			<div className="desplegado favoritos">
				<Loading />
			</div>
		);
	};

	function ListaWishList() {
		return (
			<>
				{
					traeUsuario?.map((p) => {
						return(
							<div className="favorito" key={ p.id }>
								<WishList elid={ p.id } />
								<NavLink to={`/producto/${ p.id }`}>
									<div className="imagen">
										<img src={ p.imagen } alt={ p.nombre } />
									</div>
									<div className="resto">
										<p className="titulo">{ p.nombre }</p>
										<p className="precio">$ { p.precio }</p>
									</div>
								</NavLink>
							</div>
						)
					})
				}
			</>
		)
	}

	return (
		<div className="desplegado favoritos">
			<ListaWishList />
		</div>
	)
}
export default ExtractoMicuenta;