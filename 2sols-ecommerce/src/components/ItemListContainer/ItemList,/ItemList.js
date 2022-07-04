import React, { useEffect, useState } from 'react'
import alert from '../../Alert/alert'
import { fetch } from '../Item/Item'

const ItemList = () => {
    const [productos,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
        
        
    useEffect(() => {
        fetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
      }, [])
      
  return (
    <div> {loading ? alert 
        :
        productos.map(prod => <div     
                          key={prod.id}          
                          className='col-md-4 p-1'                                                           
                      >                 
                          <div className="card w-100 mt-5" >
                              <div className="card-header">
                                  {`${prod.nombre} - ${prod.categoria}`}
                              </div>
                              <div className="card-body">
                                  <img src={prod.foto} alt='' className='w-50' />
                                  <ul>
                                    <li>Stock:{prod.stock}</li>
                                    <li>Precio:{prod.precio}</li>
                                  </ul>
                                                                               
                              </div>
                              <div className="card-footer"> 
                                      <button  className="btn btn-outline-success btn-block text-dark">
                                          Detalles del Repuesto
                                      </button>                                               
                              </div>
                          </div>                                                                                                                            
                      </div> 
    )}
    </div>
  )
}

export default ItemList