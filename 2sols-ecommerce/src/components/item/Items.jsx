import React from 'react'
import { Link } from 'react-router-dom';
import './item.css';


function Items({ productos }) {

    return (

        < div className='card' >
            <div className='img-card'>
                <img className='img-producto' src={productos.foto} alt="imagen-card" />
            </div>
            <div className='title-card'>
                <h4>Categoria: {productos.categoria}</h4>
            </div>
            <div className='title-card'>
                <h4>{productos.name}</h4>
            </div>
            <div className='precio-card'>
                <h4> $ {productos.price}ARG.</h4>
            </div>
            <div className='disp-card'>
                <h6> Disponible: {productos.stock} repuestos</h6>
            </div>
            <Link to={`/details/${productos.id}`}>
                <button className='btn-ver'>Detalles</button>
            </Link>
        </div >
    )
}

export default Items;