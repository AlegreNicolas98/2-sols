import { useParams } from "react-router-dom"

function ItemDetailContainer() {
  const {id} = useParams();
  console.log(id);

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer