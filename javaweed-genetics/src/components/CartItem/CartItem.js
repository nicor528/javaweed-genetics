import './CartItem.css'
import { useContext, useState } from "react";

export default function CartItem(props){

    let precio = parseInt(props.precio)
    let cantidad = props.quantity
    let precio_final = precio*cantidad;

    const remove = () =>{
        props.removeItem(props.id)
    }

    return(
        <div className="cartitem">
        <img width="100px" height="100px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${props.imagen}`} />
        <span> {props.nombre}</span>
        <span> Blisters: {props.quantity}</span>
        <span> Total: {precio_final}</span>
        <button onClick={remove} >X</button>
    </div>
    )
}