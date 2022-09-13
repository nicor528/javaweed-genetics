import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards ({id, nombre, imagen}) {

    const navegate = useNavigate();
    const seeDetails = () => {
      navegate(`/item/${id}`)
    }

    return(
        <Card key = {id}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
            <Card.Body>
             <Card.Title>{nombre}</Card.Title>
              <Button variant="secondary" onClick={seeDetails} >Info / Comprar</Button>{' '}
            </Card.Body>
          </Card>
    )
}