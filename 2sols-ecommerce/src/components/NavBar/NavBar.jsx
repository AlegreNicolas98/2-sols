import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'


const NavBar =() => {
  return (
    <header class="header">
    <nav class="nav">
        <div class="title animate__animated animate__flash">2Sols</div>
        <ul class="menu visible">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/nosotros.html">Nosotros</a></li>
                <li><a href="./pages/tucasa.html">Tu Casa</a></li>
                <li><a href="./pages/sueñoscumplidos.html">Sueños Cumplidos</a></li>
                <li><a href="./pages/sucursales.html">Sucursales</a></li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
            </ul>
            <CartWidget/>
    </nav>
</header>
  )
}

export default NavBar