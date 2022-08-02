import React, { useContext, useState } from "react";


export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext)

export const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartList')))

  const guardarLocalStorage = (clave, valor) => {
    localStorage.setItem(clave,JSON.stringify(valor))    
}

const addProduct = (product) => {        
  const indexProduct = cart.findIndex(prod => prod.id === product.id)
  if(indexProduct === -1 ){
      guardarLocalStorage('cartList', [ ...cart, product]) 
      setCart([
          ...cart,
          product
      ])
  }else{
      const cantidadvieja = cart[indexProduct].cantidad
      cart[indexProduct].cantidad = cantidadvieja + product.cantidad
      setCart( [...cart] )
      guardarLocalStorage('cartList', [...cart])
  }        
  
}

  const emptyCart = () => {
    setCart([])
    guardarLocalStorage('cartList', [])

  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  const eliminarProducto = (id) => {
    setCart( cart.filter(prod => prod.id !== id ) )
    guardarLocalStorage('cartList', cart.filter(prod => prod.id !== id ))

  };

  const precioTotal = ()=>{
    return cart.reduce((acumPrecio, prodObj) => acumPrecio = acumPrecio + (prodObj.price * prodObj.cantidad) , 0) // <- precioTotal
}

const cantidadTotal = ()=>{
    return cart.reduce((contador, produObject) => contador += produObject.cantidad , 0) 
}

  return (
    <CartContext.Provider value={[cart, setCart, addProduct, eliminarProducto, emptyCart, isInCart,precioTotal,cantidadTotal]}>
      {children}
    </CartContext.Provider>
  );
};