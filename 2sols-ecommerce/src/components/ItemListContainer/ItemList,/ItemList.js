import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { gFetch } from '../Item/Item';



const ItemList = () => {
    const [productos,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const {categoriaId} = useParams ();
   
        
    useEffect(() => {
        const db = getFirestore()
        if (categoriaId) {
            const queryCollection = collection(db, 'items')
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryCollectionFilter)
            .then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
            .catch( err => console.log(err) )
            .finally(()=> setLoading(false))             
        } else {           
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } ) ) ) )
            .catch( err => console.log(err) )
            .finally(()=> setLoading(false))         
        }
    }, [ categoriaId ])


      
  return (
    <div> {loading ? <div>ya llegan</div>
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
                              <Link to={`/detail/${prod.id}`}>
                                      <button className="btn btn-outline-success btn-block text-dark">
                                          Detalles del Repuesto
                                      </button>
                               </Link>                                           
                              </div>
                          </div>                                                                                                                            
                      </div> 
    )}
    </div>
  )
}

export default ItemList