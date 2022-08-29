import $ from "jquery";

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

const megusta = function ( elid ) {
	
	if ( localStorage.getItem( "wishlist" ) ) {
		let favoritosID = localStorage.getItem( "wishlist" );
		var megusta = "nomegusta";
		for ( var count = 0; count <= favoritosID.split( "," ).length-1; count++ ) {
			let favoritoID = favoritosID.split( "," )[ count ];
			favoritoID = Number(favoritoID)
			if ( elid === favoritoID ) {
				megusta = "simegusta";
			}
		};
		return megusta;
	}
	
};

const ordenaComas = function () {
	var favoritos = localStorage.getItem( "wishlist" )
	favoritos = favoritos.replaceAll( ",," , "," );
	if ( favoritos[0] === "," ) {
		favoritos = favoritos.slice( 1 , favoritos.length )
	}
	localStorage.setItem( "wishlist" , favoritos );
};

const toggleClassMegusta = function ( elid ) {
	$( `section#wishlist[data-id='${ elid }']` ).find( "span" ).toggleClass( "nomegusta simegusta" );
};

const eliminaIDfavorito = function ( elid ) {
	
	let favoritos = localStorage.getItem( "wishlist" );
	let cantidad = favoritos.length-1;
	let elarray = [];
	for ( var count = 0; count <= cantidad; count++ ) {
		let elid = favoritos.split(",")[ count ];
		elid === "" ? elid = NaN :
		elid = Number( elid );
		if ( !isNaN(elid)  ) {
			elarray.push( elid );
		} else { 
		}
	};

	for( var i = 0; i < elarray.length; i++){ 
		if ( elarray[i] === elid) { 
			elarray.splice(i, 1); 
		}
	}
	
	localStorage.setItem( "wishlist" , elarray );
	
};

export { 
	valoracion , 
	pillCategoryNombre , 
	pillCategoryLink ,
	megusta ,
	ordenaComas ,
	toggleClassMegusta ,
	eliminaIDfavorito ,
}