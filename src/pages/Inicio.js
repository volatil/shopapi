import React from 'react'

// COMPONENTS
import HelmetResumen from 'components/HelmetResumen';

// CSS
import "../assets/css/Inicio.css";

function Inicio() {
	
	function Slide() {
		return(
			<section id="slide">
				<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/7.4-sales_4_2048x.jpg?v=1656343821" alt="Inicio" />
			</section>
		)
	}
	
	function Porque() {
		return(
			<section id="porque">
				<h4>¿Por qué Poly & Bark?</h4>
				<div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/Footer_Icons-08_550x.jpg?v=1652370597" alt="Diseños modernos. Excelentes precios" />
						<p>Diseños modernos. Excelentes precios</p>
					</div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/Footer_Icons-06_550x.jpg?v=1652370575" alt="Pruébalo en casa durante 100 días. Si no te gusta, devuélvelo." />
						<p>Pruébalo en casa durante 100 días. Si no te gusta, devuélvelo.</p>
					</div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/Footer_Icons-05_550x.jpg?v=1652370597" alt="Envio gratis en todas las ordenes." />
						<p>Envio gratis en todas las ordenes.</p>
					</div>
					<div>
						<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/Footer_Icons-07_550x.jpg?v=1652370555" alt="Financiamiento de 24 meses al 0%" />
						<p>Financiamiento de 24 meses al 0%</p>
					</div>
				</div>
			</section>
		)
	}
	
	function Nosquieren() {
		return(
			<section id="nosquieren">
				<h4>Es unánime. La gente nos quiere mucho.</h4>
				<div>
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo1_814168e2-52d3-4405-ba45-478dbdd91e45_160x160_2x_1_160x160_2x_1@2x.png?v=1641982846" alt="La gente nos quiere mucho" />
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo2_940f2def-f20c-44da-802d-778b9d9fd574_160x160_2x_1_160x160_2x_1@2x.png?v=1641983020" alt="La gente nos quiere mucho" />
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo3_48a96be5-494a-4cda-89b8-eebcbd7cb9ce_160x160_2x_1_160x160_2x_1@2x.png?v=1641983053" alt="La gente nos quiere mucho" />
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo4_ed33f740-b791-493e-89cf-a7acfc8d25ea_160x160_2x_1_160x160_2x_1@2x.png?v=1641983077" alt="La gente nos quiere mucho" />
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo5_e5d189aa-33d2-420a-8a7d-806d2381bc5c_160x160_2x_1_160x160_2x_1@2x.png?v=1641983096" alt="La gente nos quiere mucho" />
					<img src="https://cdn.shopify.com/s/files/1/1150/6518/files/logo6_ac6039b4-d9de-4f02-9889-886f7f41abee_160x160_2x_1_160x160_2x_1@2x.png?v=1641983119" alt="La gente nos quiere mucho" />
				</div>
			</section>
		)
	}
	
	return (
		<section id="inicio">
			<HelmetResumen 
				title="POLY&BARK" 
				description="Shop Poly and Bark’s modern living room furniture. We offer a wide variety of mid century living room furniture. Leather sofas, sectional sofas, daybeds, coffee tables, and more. Order your modern living room furniture today at Poly and Bark."
			/>
			<Slide />
			<Porque />
			<Nosquieren />
		</section>
	)
}
export default Inicio;