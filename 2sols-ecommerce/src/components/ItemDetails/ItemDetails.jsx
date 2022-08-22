import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetails.css'
import { useCartContext } from '../../Context/CarritoContext'
import BotonesCondicionales from './BotonesCondicionales'


const ItemDetails = ({ item }) => {

  const { addCarrito } = useCartContext();
  const [quantity, setCQuantity] = useState();

  const onAdd = (count) => {
    setCQuantity(count)
    const product = { item: item, quantity: count, costo: item.price, id: item.id, foto: item.foto, name: item.name };
    addCarrito({ quantity: count, ...product });

  }

  return (
    <div className='itemDetails'>
      <div className='details-img'>
        <img className='img-details' src={item.foto} alt="img-Details" />
      </div>
      <div className='info-details'>
        <h1>{item.name}</h1>
        <p>
          Disponibles :  {item.stock} repuestos disponibles.
        </p>
        <p>
          precio :  $ {item.price}ARG.
        </p>
        {quantity ? <BotonesCondicionales /> : <ItemCount stock={item.stock} inicial={0} onAdd={onAdd}></ItemCount>}
      </div>
    </div>
  )
}

export default ItemDetails