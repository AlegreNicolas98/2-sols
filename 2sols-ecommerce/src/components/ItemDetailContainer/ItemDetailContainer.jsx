import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import {gFetch} from "../BDatos"

function ItemDetailContainer() {
  const {detalle,setDetalle} = useState([]);
  const {loading,setLoading} = useState(true);
  const {id} = useParams();
  
  useEffect(() =>{
    gFetch
    .then ((resp) =>
    setDetalle (resp.find((categoria) => categoria.id === Number (id))))
    .catch ((rej) => console.log(rej))
    .finally (() => setLoading(false));
  },[id]);

 const {nombre,precio,stock,categoria,foto} = detalle;

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
            <h3>{nombre}</h3>
          </div>
          <p className="">{categoria}</p>
          <div className="text-end">
            <h3>$ {precio}</h3>
            <h3>Cantidad de Stock :{stock}</h3>
          </div>
          <div className="text-end">
            <button
              className="css-button-sliding-to-left--sky text-decoration-none text-center" >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer