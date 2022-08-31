import './CartItem.css'
import { useContext, useState } from "react";

export default function CartItem(props){
/*
    let precio = props.valor; 
    
    let cantidad = props.cantidad
    let precio_final = parseInt(precio*cantidad) ;
    console.log(precio,cantidad)
    console.log(precio_final)*/

    const remove = () =>{
        props.removeItem(props.id)
    }

    return(
        <div className="cartitem">
        <img width="100px" height="100px" src={`https://raw.githubusercontent.com/nicor528/javaweed-genetics/master/javaweed-genetics/public/img/${props.imagen}`} />
        <span> {props.nombre}</span>
        <span> Blisters: {props.cantidad}</span>
        <span> Total: {props.valor}</span>
        <button onClick={remove} >X</button>
    </div>
    )
}