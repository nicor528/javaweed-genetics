import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cards from './Card/Cards';

export default function CardList({products}) {

  return (
    <Row xs={1} md={3} className="g-4">
      {products.map(item => {
        return (<Col>
          <Cards
            id = {item.id}
            nombre = {item.nombre}
            imagen = {item.imagen} 
          />
        </Col>)
      })}
    </Row>
  );
}