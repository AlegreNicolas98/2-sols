import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'


const NavBar =() => {
  return (
    <header className="header">
    <nav className="nav">
      <NavLink className="titulo"to='/'>
        <div>3sols</div>
        </NavLink>
        <ul class="menu visible">
                <NavLink className='pag' to='/'><li>Inicio</li></NavLink>
                <NavLink className='pag'  to='/categoria/Motor'><li>Motor</li></NavLink>
                <NavLink className='pag'  to='/categoria/Suspension'><li>Suspensión</li></NavLink>
                <NavLink className='pag'  to='/categoria/Eje'><li>Eje Delantero</li></NavLink>
            </ul>
            <Link to='/cart'>
            <CartWidget/>
            </Link>
    </nav>
</header>
  )
}

export default NavBar 