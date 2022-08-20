 import { useEffect, } from "react";
import { useState } from "react"
import { Link, useParams } from "react-router-dom";
import { ItemCount } from "../ItemCount";
import {useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import {gFetch} from "../ItemListContainer/Item/Item";



function ItemDetailContainer({}) {
  const [productos,setProducts] = useState([])
  const [loading,setLoading] = useState(true)
  const {id} = useParams ()
  const [cart, addProduct,emptyCart,isInCart,eleminarProducto] = useContext (CartContext);
  const [cantidad,setCantidad] = useState()    
    
  useEffect(() => {
    gFetch
      .then((resp) =>
        setProducts(resp.find((item) => item.id ===id))
      )
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));
  }, [id]);


 const {nombre,precio,stock,categoria,foto} = productos;

 const funcionContador = (cantidad)=>{
  console.log("El valor del contador es", cantidad);
  setCantidad(cantidad)
  const producto = {item:productos,quantity:cantidad}
  addProduct(producto);
  emptyCart(producto);
  isInCart (producto);
  eleminarProducto(producto);
 }


  return loading ? (
    <div className="text-center mt-4">
      <h1>espere por favor</h1>
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow w-100">
        <div className="col-md-6 text-center">
          <img src={foto} alt="" className="w-75 p-4 rounded-5" />
        </div>
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between">
            <h3>Pieza: {nombre}</h3>
          </div>
          <p className="">Categoria: {categoria}</p>
          <div className="text-end">
            <h3>Precio: {precio}</h3>
            <h3>Cantidad de Stock :{stock}</h3>
          </div>
          <div className="text-end">
            {cantidad ? <Link to = "/cart"><button>Terminar Compra</button></Link>:<ItemCount stock={stock} initial={1} onAdd={funcionContador}/>}

          </div>
        </div>
      </div>
    </div>
  ); 
}

export default ItemDetailContainer 