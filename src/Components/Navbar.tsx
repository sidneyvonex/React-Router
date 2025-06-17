import { Link,NavLink } from "react-router-dom"
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
        <Link to={"/"}>My App</Link>
        </div>
        <ul className="navbar-links">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
        </ul>
    </nav>
  )
}
