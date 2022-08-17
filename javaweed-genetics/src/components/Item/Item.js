import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';



function Item({id, titulo, precio, stock, imagen}){

    const navegar = useNavigate();
    const verdetalle = () => {
       navegar(`/item/${id}`)
       console.log(id)
    }

    return(
        <div className="item" key={id}>
            <span> {titulo}</span>
            <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
            <input width="20px" type="button" value="Ver mas info" onClick={verdetalle} />
        
        </div>
    )
}

export default Item;