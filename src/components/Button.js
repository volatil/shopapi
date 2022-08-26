import React from "react";

import "assets/css/Button.css";

function Button( { texto = "Texto no Seteado"  , laclase = "danger" , onClick = null } = {}) {
	return (
		<button id="button" className={laclase} onClick={onClick}>
			<span></span>
			<p>{texto}</p>
		</button>
	);
}

// Button.defaultProps = {
// 	texto : "Texto no Seteado" , 
// 	laclase : "danger" , // primary , warning , danger , disabled
// }

export default Button;
