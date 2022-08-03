import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

function Item({id, titulo, precio, stock, imagen}){
    return(
        <div className="item">
            <span> {titulo}</span>
            <img width="200px" height="200px" src={imagen} />
            <input width="20px" type="button" value="Ver mas info"/>
            <ItemCount stock={stock}/>
            <span> Valor: ${precio} </span>
        </div>
    )
}

export default Item;