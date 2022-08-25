import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';


function ItemDetails({nombre, imagen, valor, stock, id}){

    const {addItemToCart} = useContext(CartContext);

    const addQuantityToCart = (quantity) => {
        addItemToCart({
            id: id,
            cantidad : quantity,
            imagen: imagen,
            valor : valor,
            nombre: nombre,
        })
    }

    return(
        <div className="itemdetails">
        <span> {nombre}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${imagen}`} />
        <span> Valor del blister: $ {valor}  </span>
        <ItemCount Stock={stock} addItem={addQuantityToCart}  />
        </div>
    )
}

export default ItemDetails;
