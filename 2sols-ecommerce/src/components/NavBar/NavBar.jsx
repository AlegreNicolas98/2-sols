import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'


const NavBar =() => {


  return (
    <header class="header">
    <nav class="nav">
      <NavLink to='/'>
        <div class="title animate__animated animate__flash">3sols</div>
        </NavLink>
        <ul class="menu visible">
                <NavLink to='/'><li>Inicio</li></NavLink>
                <NavLink to='/categoria/Motor'><li>Motor</li></NavLink>
                <NavLink to='/categoria/Suspencion'><li>Suspencion</li></NavLink>
                <NavLink to='/categoria/Eje'><li>Eje Delantero</li></NavLink>
            </ul>
            <Link to='/cart'>
            <CartWidget/>
            </Link>
    </nav>
</header>
  )
}

export default NavBar