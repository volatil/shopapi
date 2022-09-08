import { useEffect , useState } from "react";
import HelmetResumen from "components/HelmetResumen";
import datajson from "../assets/json/json_zapatillas_clickzapatilla.json";

import Test from "components/Test";

function Clickzapatilla() {
	
	const [ productos , setProductos ] = useState();
	
	useEffect(() => {
		// console.log( datajson );
		let todo = [];
		// for ( let count = 1; count <= 1573; count ++ ) {
		for ( let count = 1; count <= 4; count ++ ) {
			let resumen = datajson[ count ];
			var z = {
				"id" : resumen.id ,
				"modelo" : resumen.modelo ,
				"marca" : resumen.marca ,
				"precio" : resumen.precio ,
				"tallas" : resumen.tallas ,
				"imagen" : function(){
					let imagen = resumen.imagen;
					if ( imagen.split( " " ).length >= 2 ) {
						imagen = imagen.split( " " )[0];
						imagen = imagen.replaceAll( ".." , "" )
					};
					imagen = `https://www.clickzapatilla.cl/${ imagen }`;
					return imagen;
				} ,
			}
			todo.push({z})
			setProductos( todo );
		}
	},[])

	return (
		<>
			<HelmetResumen 
				title="Click Zapatilla || POLY&BARK"
				description="Test ClickZapatilla.cl"
			/>
			<section id="clickzapatilla">
				<h1>CLICK ZAPATILLA !</h1>
				<div className="productos">
					{
						// console.log( productos )
					}
					<Test data={ productos } />
					{
					// productos?.map((p) => {
					// 	return(
					// 		<div className="producto" key={ p.z.id  }>
					// 			<Test 
					// 				id={ p.z.id }
					// 				modelo={ p.z.modelo }
					// 				imagen={ p.z.imagen() }
					// 				marca={ p.z.marca }
					// 				precio={ p.z.precio }
					// 				tallas={ p.z.tallas }
					// 			/>
					// 		</div>
					// 	)
					// })
					}
				</div>
			</section>
		</>
	)
}
export default Clickzapatilla;