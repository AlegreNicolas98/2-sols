import React from 'react'
import './formulario.css'

const BuyComplete = ({orderId}) => {
  return (
    <div className='buyComplete'>
      <h2>Muchas Gracias por su Compra</h2>
      <p>El repuesto llegara dentro de 10 días habiles.</p>
      <p>Puede seguir el proceso de entrega con el numero de order: {orderId} </p>
    </div>
  )
}

export default BuyComplete