import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetails({id, titulo, precio, stock, imagen, tipo, porcentajes, ciclovida}){
    
    
  //      <ItemCount stock={stock} />

    return(
        <div className="itemdetails">
        <span> {titulo}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
        <span> Valor del blister: $ {precio}  </span>
        <ItemCount stock={stock}   />
        </div>
    )
}

export default ItemDetails;
