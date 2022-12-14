import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';

// COMPONENTS
import Loading from "../components/Loading/Loading";
import Button from "components/Button";
import Pill from "components/Pill";
import Porque from "components/Porque";
import HelmetResumen from "components/HelmetResumen";
import WishList from "components/WishList";

// CSS
import "../assets/css/detalle.css";

// HELPERS
import { pillCategoryLink , pillCategoryNombre , valoracion } from "../helpers/functions.js";

function Detalle() {
	
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
			setLoading( false );
		})
	},[slug])

	function Detalle() {
		return (
			<>
				{
				producto?.map((p) => {
					return(
						<div className="producto" data-id={ p.id } key={ p.id }>
							<div>
								<WishList elid={ p.id } />
								<div className="imagen">
									<img src={ p.imagen } alt={ p.nombre } />
								</div>
								<div className="resto">
									<h4>{ p.nombre }</h4>
									<p className="precio">$ { p.precio() }</p>
									<div className="valoracion">
										<p>{ valoracion( p.valoracion.rating  )}</p>
										<p className="cantidad">({ p.valoracion.cantidad }) votos</p>
									</div>
									<Button laclase="comprar" texto="Comprar" />
									<p className="descripcion">{ p.descripcion }</p>
									<span>Categoria: </span>
									<Pill link={ pillCategoryLink( p.categoria ) } texto={ pillCategoryNombre( p.categoria ) } />
								</div>
							</div>
						</div>
					)
				})
				}
			</>
		)
	}
	
	if ( loading ) {
		return (
			<section id="detalle">
				<HelmetResumen />
				<Loading />
			</section>
		);
	};

	return (
		<section id="detalle">
			<HelmetResumen 
				title={`${producto?.map((p) => {return(p.nombre)})} || POLY&BARK`}
				description={ producto?.map((p) => {return(p.descripcion)}) }
			/>
			<Detalle />
			<Porque />
		</section>
	)
}
export default Detalle;