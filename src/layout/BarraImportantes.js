import { useState } from "react"

// LAYOUT
import ExtractoMicuenta from "layout/ExtractoMicuenta";
import ExtractoFavoritos from "layout/ExtractoFavoritos";

// CSS
import "../assets/css/BarraImportantes.css"

// COMPONENTS
import Icono from "../components/Icono";

function BarraImportantes() {
	
	const [ esCuentaHover , setCuentaEsHover ] = useState( false );
	const [ esFavoritoHover , setFavoritoHover ] = useState( false );

	const handleCuentaMouseOver = () => {
		setCuentaEsHover(true);
	};
	
	const handleCuentaMouseOut = () => {
		setCuentaEsHover(false);
	};

	const handleFavoritoMouseOver = () => {
		setFavoritoHover(true);
	};
	
	const handleFavoritoMouseOut = () => {
		setFavoritoHover(false);
	};

	return (
		<section id="barraimportantes">
			<ul>
				<li className="favoritos" onMouseOver={ handleFavoritoMouseOver } onMouseOut={ handleFavoritoMouseOut }>
					<Icono nombre="favorite" />
					<p>Favoritos</p>
					{ esFavoritoHover && <ExtractoFavoritos /> }
				</li>
				<li className="cuenta" onMouseOver={ handleCuentaMouseOver } onMouseOut={ handleCuentaMouseOut }>
					<Icono nombre="account_circle" />
					<p>Mi Cuenta</p>
					{ esCuentaHover && <ExtractoMicuenta /> }
				</li>
			</ul>
		</section>
	)
}
export default BarraImportantes;