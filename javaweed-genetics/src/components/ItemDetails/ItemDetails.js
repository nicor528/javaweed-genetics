import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';


function ItemDetails({id, titulo, precio, stock, imagen, tipo, porcentajes, ciclovida}){

    const {addItemToCart} = useContext(CartContext);

    const addQuantityToCart = (quantity) => {
        addItemToCart({
            id,
            cantidad : quantity,
            imagen,
            precio,
            titulo
        })
    }


    return(
        <div className="itemdetails">
        <span> {titulo}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
        <span> Valor del blister: $ {precio}  </span>
        <ItemCount Stock={stock} addItem={addQuantityToCart}  />
        </div>
    )
}

export default ItemDetails;
