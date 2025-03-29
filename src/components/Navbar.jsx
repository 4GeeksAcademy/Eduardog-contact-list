// Navbar.js - Modificado para enlaces de contactos
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact App</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo" className="btn btn-primary me-2">
						View Contacts
					</Link>
					<Link to="/add" className="btn btn-success">
						Add Contact
					</Link>
				</div>
			</div>
		</nav>
	);
};