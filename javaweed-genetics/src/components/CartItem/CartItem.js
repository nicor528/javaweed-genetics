import './CartItem.css'
import { useContext, useState } from "react";

export default function CartItem(props){


    let precio = parseInt(props.precio)
    let cantidad = props.cantidad
    console.log(precio)
    let precio_final = precio*cantidad;

    const remove = () =>{
        props.removeItem(props.id)
    }

    return(
        <div className="cartitem">
        <span> {props.titulo}</span>
        <img width="200px" height="200px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${props.imagen}`} />
        <span> Blister: {props.cantidad}</span>
        <span> Total: {precio_final}</span>
        <button onClick={remove} >X</button>
    </div>
    )
}