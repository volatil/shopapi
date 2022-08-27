import { Helmet } from "react-helmet";

// function HelmetResumen( props ) {
function HelmetResumen({ title = "POLY&BARK" , description = "Shop" } = {}) {
	return (
		<Helmet>
			<title>{ title }</title>
			<meta name="description" content={ description } />
		</Helmet>
	)
}
export default HelmetResumen;