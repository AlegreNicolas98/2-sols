import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import Logo from '../img/Logo3SOLS.png'
import './NavBar.css'
import { Navbar, Nav } from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CarritoContext'


const NavBar = () => {

    const {countTot} = useCartContext();
    return (
        <header className="header">
        <nav className="nav">
        <NavLink to={"/"} className="navbar-brand">
                    <img src={Logo} alt="logo" />
                </NavLink>
            <ul class="menu visible">
                    <NavLink className='pag' to='/'><li>Inicio</li></NavLink>
                    <NavLink className='pag'  to='/categoria/Motor'><li>Motor</li></NavLink>
                    <NavLink className='pag'  to='/categoria/Suspension'><li>Suspensión</li></NavLink>
                    <NavLink className='pag'  to='/categoria/Eje'><li>Eje Delantero</li></NavLink>
            </ul>
            <Link to='/cart' className='contain'>
                        <CardWidget />
                        <span className='SpanContador'>{countTot() !==0 && `${countTot()}`} </span>
                    </Link>
        </nav>
    </header>


    )
}

export default NavBar

{/* <header className="header">
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to={"/"} className="navbar-brand">
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/Inicio" className="nav-link">
                           Inicio
                        </NavLink>
                        <NavLink to="/Motor" className="nav-link">
                            Motor
                        </NavLink>
                        <NavLink to="/Suspencion" className="nav-link">
                            Suspención
                        </NavLink>
                        <NavLink to="/EjeDelantero" className="nav-link">
                            Eje Delantero
                        </NavLink>
                    </Nav>

                    <Link to='/cart' className='contain'>
                        <CardWidget />
                        <span className='SpanContador'>{countTot() !==0 && `${countTot()}`} </span>
                    </Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
</header> */}