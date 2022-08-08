import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom';

function Item({id, titulo, precio, stock, imagen}){

    const navegar = useNavigate();
    const verdetalle = () => {
       navegar(`/item/${id}`)
       console.log(id)
    }

    return(
        <div className="item">
            <span> {titulo}</span>
            <img width="200px" height="200px" src={imagen} />
            <input width="20px" type="button" value="Ver mas info" onClick={verdetalle} />
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Item;