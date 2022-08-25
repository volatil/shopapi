// CSS
import "../assets/css/BarraImportantes.css"

// COMPONENTS
import Icono from "../components/Icono";

function BarraImportantes() {
	return (
		<section id="barraimportantes">
			<ul>
				<li className="favoritos">
					<Icono nombre="favorite" />
					<p>Favoritos</p>
				</li>
			</ul>
		</section>
	)
}
export default BarraImportantes;