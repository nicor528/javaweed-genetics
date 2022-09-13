import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CardsDetails.css'
import ItemCount from '../../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../../Contexts/CartContext';

export default function ImageAndTextExample({products}) {

    const {addItemToCart} = useContext(CartContext);

    const addQuantityToCart = (quantity) => {
        addItemToCart({
            id: products.id,
            cantidad : quantity,
            imagen: products.imagen,
            valor : products.valor,
            nombre: products.nombre,
        })
    }

  return (
    <Row xs={2} md={1} className='g-4' >
    <Col>
    <CardGroup>
        <Card bg='success' text='white' >
            <Card.Header>{products.nombre}</Card.Header>
            <Col>
            <img className='img' src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${products.imagen}`} />
            </Col>
        </Card>
        <Card bg='dark' text='white' >
            <Card.Header >Detalles / Información</Card.Header>
            <Card.Body>
                    <div className='lista' >
                        <li>Predominancia: {products.genetica}</li>
                        <li>Ciclo de vida: {products.ciclovida}</li>
                        <li>Tipo: {products.tipo}</li>
                        <li>Costo del blister: ${products.valor}</li>
                        <li>Cantidad de blisters disponibles: {products.stock}</li>
                    </div>
                    <ItemCount Stock={products.stock} addItem={addQuantityToCart} ></ItemCount> 
            </Card.Body>
        </Card>
        <Card bg='success' text='white' >
            <Card.Header>{products.nombre}</Card.Header>
            <Col>
            <img className='img2' src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${products.imagen}`} />
            </Col>
        </Card>
    </CardGroup>
    </Col>
    <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Row>
  )
}