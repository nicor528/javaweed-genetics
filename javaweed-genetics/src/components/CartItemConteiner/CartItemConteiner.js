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

    console.log(cartData)
    return(
        <div className="cartitemconteiner">
            
            {(cartData.length > 0)? cartData.map((item) => {
                return <CartItem removeItem={remove} nombre={item.nombre} id={item.id} key={item.id} cantidad={item.cantidad} valor={item.valor} imagen={item.imagen} ></CartItem>
            } ) 
             : <span>No hay elentos en el carrito</span>}
             <button className="botonclean" onClick={cleanCart} >Borrar todos los elementos del carrito </button>
        </div>
    )
}