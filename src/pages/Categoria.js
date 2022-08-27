import { useEffect , useState } from "react";
import { useParams , NavLink } from 'react-router-dom';

// COMPONENTS
import Loading from "../components/Loading/Loading";
import Porque from "../components/Porque";
import WishList from "components/WishList";

// CSS
import "../assets/css/producto.css";

// HELPERS
import { valoracion } from "../helpers/functions.js";

function Categoria() {
	
	let { slug } = useParams();
	
	let categoria = "";
	switch ( slug ) {
		case "todas":
			categoria = "";
			break;
		case "joyeria":
			categoria = "category/jewelery";
			break;
		case "electronica":
			categoria = "category/electronics";
			break;
		case "hombre":
			categoria = "category/men's clothing";
			break;
		case "mujer":
			categoria = "category/women's clothing";
			break;
	
		default:
			alert( `Categoria: ${ categoria } no reconocida.` );
			break;
	}
	
	
	const [ producto , setProducto ] = useState();
	const [ loading , setLoading ] = useState( false );
	
	useEffect(() => {
		
		setLoading( true )
		
		const api = `https://fakestoreapi.com/products/${ categoria }`;
		fetch( api ).then( api => api.json() )
		.then( get => {
			var todo = [];
			for ( var count = 0; count <= get.length-1; count++ ) {
				let resumen = get[ count ];
				var productito = {
					"id" : resumen.id ,
					"nombre" : resumen.title ,
					"precio" : function(){
						let precio = resumen.price;
						precio = precio * 918;
						precio = String(precio).split( "." )[0];
						precio = Number(precio).toLocaleString('es-CL');
						return precio;
					} ,
					"imagen" : resumen.image ,
					"valoracion" : {
						"rating" : resumen.rating.rate ,
					} ,
				};
				todo.push({
					"id" : productito.id ,
					"nombre" : productito.nombre ,
					"precio" : productito.precio() ,
					"imagen" : productito.imagen ,
					"rating" : productito.valoracion.rating ,
				});
			};
			setProducto( todo )
			setLoading( false )
		});
	},[categoria])

	function ListadeProductos() {
		return (
			<>
				{
					producto?.map((p) => {
						return(
							<div className="producto" data-id={ p.id } key={ p.id }>
								<WishList elnombre={ p.nombre  } elid={ p.id } />
								<NavLink to={`/producto/${ p.id }`}>
									<div className="imagen">
										<img src={ p.imagen } alt={ p.nombre } />
									</div>
									<h4>{ p.nombre }</h4>
									<p className="precio">$ { p.precio }</p>
									<p className="valoracion">{ valoracion( p.rating  )}</p>
								</NavLink>
							</div>
						)
					})
				}
			</>
		)
	}

	if ( loading ) {
		return (
			<section className="test">
				{/* <HelmetResumen title="Cargando Color ..." />
				<h2>
					<Icono nombre="palette" />
					Color Random
				</h2> */}
				<Loading />
			</section>
		);
	};

	return (
		<>
			<section className="productos">
				<ListadeProductos />
			</section>
			<Porque />
		</>
	)
}
export default Categoria;