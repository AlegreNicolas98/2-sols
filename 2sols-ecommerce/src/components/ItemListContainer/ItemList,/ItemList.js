import { Container } from 'react-bootstrap'
import Item from '../Item/Item'

function ItemList({producto}) {
  return (
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
    {producto.map((element) => (
      <Item products={element} />
    ))}
  </Container>
  )
}

export default ItemList