import './ItemDetails.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';


function ItemDetails({Nombre, Imagen, Precio, Stock, id}){

    const {addItemToCart} = useContext(CartContext);

    const addQuantityToCart = (quantity) => {
        addItemToCart({
            id: id,
            cantidad : quantity,
            Imagen: Imagen,
            Precio : Precio,
            Nombre: Nombre,
        })
    }


    return(
        <div className="itemdetails">
        <span> {Nombre}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${Imagen}`} />
        <span> Valor del blister: $ {Precio}  </span>
        <ItemCount Stock={Stock} addItem={addQuantityToCart}  />
        </div>
    )
}

export default ItemDetails;
