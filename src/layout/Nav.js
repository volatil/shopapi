import { NavLink } from 'react-router-dom'

function Nav() {
	return (
		<nav>
			<ul>
				{/* <li>
					<NavLink to="/">Inicio</NavLink>
				</li> */}
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/todas">Productos</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/joyeria">Joyeria</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/electronica">Electrónica</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/hombre">Hombre</NavLink>
				</li>
				<li>
					<NavLink className={({ isActive }) => (isActive ? 'tamoActivo' : '')} to="/categoria/mujer">Mujer</NavLink>
				</li>
			</ul>
		</nav>
	)
}
export default Nav;