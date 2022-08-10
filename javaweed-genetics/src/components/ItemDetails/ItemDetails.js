import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'


function ItemDetails({id, titulo, precio, stock, imagen, tipo, porcentajes, ciclovida}){
    return(
        <div className="itemdetails">
        <span> {titulo}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
        <ItemCount stock={stock}/>
        <span> Valor del blister: $ {precio}  </span>
        </div>
    )
}

export default ItemDetails;
