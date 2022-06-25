import carrito from '../../Images/carrito.png'

const CartWidget = () => {
  return (
    <div className='w-25'>
        <img src={carrito} alt="carrito" className='w-25'/>
    </div>
  )
}

export default CartWidget