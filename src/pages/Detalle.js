import { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

// COMPONENTS
import Loading from "../components/Loading/Loading";
import Button from "components/Button";

// CSS
import "../assets/css/detalle.css";

// HELPERS
import { pillCategoryLink , pillCategoryNombre , valoracion } from "../helpers/functions.js";
import Pill from "components/Pill";
import Porque from "components/Porque";

function Detalle() {
	
	const [ producto , setProducto ] = useState();
	const [ loading , setLoading ] = useState( false );
	const [ ElTest , setElTest ] = useState({"algo":"hehe"});
	let { slug } = useParams();

	useEffect(() => {
	
		setElTest({ "hola" : "holaaaaa" , "chao" : "chaito" })
		// console.log( ElTest );
		
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
							<div>
								<div className="imagen">
									<img src={ p.imagen } alt={ p.nombre } />
								</div>
								<div className="resto">
									<h4>{ p.nombre }</h4>
									<p className="precio">$ { p.precio() }</p>
									<p className="valoracion">{ valoracion( p.valoracion.rating  )}</p>
									{/* <Button laclase="disabled" texto="Comprar" /> */}
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
				<Helmet>
					<title>Cargando ...</title>
				</Helmet>
				<Loading />
			</section>
		);
	};

	return (
		<section id="detalle">
			{
				producto?.map((p) => {
					return(
						<>
							<Helmet>
								<title>{p.nombre}</title>
							</Helmet>
						</>
					)
				})
			}
			<Detalle />
			<Porque />
		</section>
	)
}
export default Detalle;