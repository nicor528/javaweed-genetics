import { Button } from "bootstrap"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Contexts/CartContext"
import CartItem from "../CartItem/CartItem"
import './CartItemConteiner.css'

export default function CartItemConteiner(){

    const {cartData, removeItemCart, cleanCart} = useContext(CartContext)
    
    const remove = (id) => { 
        removeItemCart({id})
        }

    return(
        <div className="cartitemconteiner">
            
            {(cartData.length > 0)? cartData.map((item) => {
                return <CartItem removeItem={remove} titulo={item.titulo} id={item.id} key={item.id} quantity={item.cantidad} precio={item.precio} imagen={item.imagen} ></CartItem>
            } ) 
             : <span>No hay elentos en el carrito</span>}
             <button onClick={cleanCart} >Borrar todos los elementos del carrito </button>
        </div>
    )
}