import { useEffect , useState } from "react";
import { useParams , NavLink } from 'react-router-dom';

// COMPONENTS
import Loading from "../components/Loading/Loading";

// CSS
import "../assets/css/detalle.css";

// HELPERS
import { pillCategoryLink , pillCategoryNombre , valoracion } from "../helpers/functions.js";

function ProductoDetalle() {
	
	const [ producto , setProducto ] = useState();
	const [ loading , setLoading ] = useState( false );
	let { slug } = useParams();

	useEffect(() => {
		setLoading( true )
		const api = `https://fakestoreapi.com/products/${ slug }`;
		fetch( api ).then( api => api.json() )
		.then( x => {
			var todo = [{
				"id" : x.id ,
				"nombre" : x.title ,
				"precio" : function(){
					let precio = x.price;
					precio = precio * 918;
					precio = String(precio).split( "." )[0];
					precio = Number(precio).toLocaleString('es-CL');
					return precio;
				} ,
				"descripcion" : x.description ,
				"categoria" : x.category ,
				"imagen" : x.image ,
				"valoracion" : {
					"rating" : x.rating.rate ,
					"cantidad" : x.rating.count ,
				} ,
			}];
			setProducto( todo );
			setLoading( false )
		})
	},[slug])

	function Detalle() {
		return (
			<>
				{
				producto?.map((p) => {
					return(
						<div className="producto" key={ p.id }>
							<img src={ p.imagen } alt={ p.nombre } />
							<h4>{ p.nombre }</h4>
							<p className="precio">$ { p.precio() }</p>
							<p className="valoracion">{ valoracion( p.valoracion.rating  )}</p>
							<p>{ p.descripcion }</p>
							<NavLink to={pillCategoryLink( p.categoria )}>
								<span>Categoria: </span>
								<span className="categoria">{ pillCategoryNombre( p.categoria ) }</span>
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
		<section id="detalle">
			<Detalle />
		</section>
	)
}
export default ProductoDetalle;