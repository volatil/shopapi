import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/BarraSuperior.css";

function BarraSuperior() {
	return (
		<section id="barrasuperior">
			<NavLink to="/">
				<p>¡Venta del Día del Trabajador! 10% de descuento + 5% de descuento adicional en toda la tienda con el código "TRABAJADOR2022". Excluye Productos Digitales.</p>
			</NavLink>
		</section>
	)
}
export default BarraSuperior;