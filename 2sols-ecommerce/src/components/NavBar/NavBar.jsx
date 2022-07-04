import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'


const NavBar =() => {
  return (
    <header class="header">
    <nav class="nav">
        <div class="title animate__animated animate__flash">3sols</div>
        <ul class="menu visible">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="./pages/nosotros.html">Servicios</a></li>
                <li><a href="./pages/tucasa.html">Productos</a></li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
            </ul>
            <CartWidget/>
    </nav>
</header>
  )
}

export default NavBar