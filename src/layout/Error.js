// COMPONENTS
import HelmetResumen from "components/HelmetResumen";

function Error() {
	return (
		<>
			<HelmetResumen 
				title={`ERROR || POLY&BARK`}
			/>
			<section id="Error">
				<h1 style={{ textAlign: "center" , fontSize: "4em" , margin: "50px 0 0 0" }}>ERROR 404!</h1>
				<img style={{ margin: "0 auto" , display: "block" , width: "400px" }} src="https://ouch-cdn2.icons8.com/_oSLrZ7cU_9Tff313HYsiB_5i-ovko_7QuB0OL6a49M/rs:fit:608:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTgy/LzNiNDEwMWNiLWMx/MTQtNDJkMS04MTgw/LTVhZGZlZDFhOTgz/Zi5zdmc.png" alt="Error 404" />
			</section>
		</>
	)
}
export default Error;