import { NavLink } from 'react-router-dom';

// CSS
import "assets/css/Pill.css";

function Pill({ texto = "default text" , link = "/" } = {}) {
	return (
		// <button id="pill">{ texto }</button>
		<NavLink id="pill" to={link}>
			<span className="material-symbols-outlined">nest_heat_link_e</span>
			<p>{ texto }</p>
		</NavLink>
	)
}
export default Pill;