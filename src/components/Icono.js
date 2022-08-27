function Icono ({ nombre = "not_listed_location" , outline = false , className = "" } = {}) {
	if ( outline ) {
		var css = "material-symbols-outlined-delgado";
	} else {
		css = ""
	}
	return (
		<span className={`material-symbols-outlined ${css} ${className}`}>{ nombre }</span>
	)
}
export default Icono;