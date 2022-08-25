const valoracion = function ( estrellas ) {
	estrellas = String( estrellas )
	if ( estrellas === "1" ) {
		return (
			<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
		)
	} else if ( estrellas.includes( "1." ) ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star_half</span>
			</>
		)
	} else if ( estrellas === "2" ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
			</>
		)
	} else if ( estrellas.includes( "2." ) ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star_half</span>
			</>
		)
	} else if ( estrellas === "3" ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
			</>
		)
	} else if ( estrellas.includes( "3." ) ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star_half</span>
			</>
		)
	} else if ( estrellas === "4" ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
			</>
		)
	} else if ( estrellas.includes( "4." ) ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star_half</span>
			</>
		)
	} else if ( estrellas === "5" ) {
		return (
			<>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
				<span style={{ color: "#ffbf0a" }} className="material-symbols-outlined">star</span>
			</>
		)
	} else {
		alert( `Estrella ${ estrellas } no seteada.` );
	}
	
};

const pillCategoryNombre = function ( slug ) {

	switch ( slug ) {
		case "jewelery":
			slug = "Joyeria";
			return slug;
		case "electronics":
			slug = "Electrónica";
			return slug;
		case "men's clothing":
			slug = "Hombre";
			return slug;
		case "women's clothing":
			slug = "Mujer";
			return slug;
	
		default:
			return `[${slug}] Categoria no reconocida.`
	}
};

const pillCategoryLink = function ( slug ) {

	switch ( slug ) {
		case "jewelery":
			slug = "/categoria/joyeria";
			return slug
		case "electronics":
			slug = "/categoria/electronica";
			return slug
		case "men's clothing":
			slug = "/categoria/hombre";
			return slug
		case "women's clothing":
			slug = "/categoria/mujer";
			return slug
	
		default:
			return `[${slug}] Categoria no reconocida.`;

	}
};

export { 
	valoracion , 
	pillCategoryNombre , 
	pillCategoryLink ,
}