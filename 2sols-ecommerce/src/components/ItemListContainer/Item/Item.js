import React from 'react'
import { Link } from 'react-router-dom'

function Item({products}) {
    const {id,categoria,foto,nombre,stock,precio} = products

  return (
   <div className="card w-100 mt-5" >
                              <div className="card-header">
                                  {{nombre} - {categoria}}
                              </div>
                              <div className="card-body">
                                  <img src={foto} alt='' className='w-50' />
                                  <ul>
                                    <li>Stock:{stock}</li>
                                    <li>Precio:{precio}</li>
                                  </ul>
                                                                               
                              </div>
                              <div className="card-footer"> 
                              <Link to={`/detail/${id}`}>
                                      <button  className="btn btn-outline-success btn-block text-dark">
                                          Detalles del Repuesto
                                      </button>
                               </Link>                                           
                              </div>
    </div>                                                                                                                            
                      
  )
}

export default Item