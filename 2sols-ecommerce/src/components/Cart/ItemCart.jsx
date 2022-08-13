import { useEffect } from "react"
import { useCartContext } from "../CartContext/CartContext"


const Cart = (product) => {

    const { eliminarProducto } = useCartContext()
    

    // console.log(getCartLocalStorage())
    
    return (
        <div>
            <h1>Carrito</h1>
           <img src={product.foto} alt="" />
           <div>
            <p>Titulo:{product.nombre} </p>
            <p>Cantidad:{product.quantity} </p>
            <p>Precio u.: {product.precio} </p>
            <p>subtototal: {product.quantity * product.precio} </p>
            <button onClick={() => eliminarProducto}> Eliminar Unidad</button>
           </div>
        </div>
    )
}

export default ItemCart