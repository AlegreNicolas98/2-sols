import { Alert } from "bootstrap";
import React from "React";
import { useEffect,useState } from "React";
import { useParams } from 'react-router-dom'
import {gFetch} from '../BDatos'
import ItemList from "./ItemList,/ItemList";


const ItemListContainer = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const {categoriaId} = useParams ()
        
    useEffect(() => {
        if (categoriaId) {
            gFetch
            .then(resp => setProducts(resp.filter((element)=> element.categoriaId === categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            gFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))  
        }
      
      }, [categoriaId])
      
  return (
    <div> {loading ? <h1>ahi vienen</h1>
        :
        <ItemList producto={products} />
    }
    </div>
  )
}
  
export default ItemListContainer