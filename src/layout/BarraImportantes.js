import { useState } from "react"

// LAYOUT
import ExtractoMicuenta from "layout/ExtractoMicuenta";

// CSS
import "../assets/css/BarraImportantes.css"

// COMPONENTS
import Icono from "../components/Icono";

function BarraImportantes() {
	
	const [ esHover , setEsHover ] = useState( false );

	const handleMouseOver = () => {
		setEsHover(true);
	};
	
	const handleMouseOut = () => {
		setEsHover(false);
	};

	return (
		<section id="barraimportantes">
			<ul>
				<li className="favoritos">
					<Icono nombre="favorite" />
					<p>Favoritos</p>
				</li>
				<li className="cuenta" onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOut }>
					<Icono nombre="account_circle" />
					<p>Mi Cuenta</p>
					{ esHover && <ExtractoMicuenta /> }
				</li>
			</ul>
		</section>
	)
}
export default BarraImportantes;