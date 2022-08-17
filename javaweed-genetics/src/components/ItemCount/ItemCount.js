import './ItemCount.css'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function ItemCount({Stock, addItem}){

    const [agregado, setAgregado] = useState(false);

    const [contador, setContador] = useState(1)
    let stock = Stock;

    function sumar_contador(){
        if (contador < stock) {
            setContador(contador + 1)    
        }
        
    }

    function restar_contador(){
        if(contador>1){
        setContador(contador - 1)
    }}

    function agregar_a_carrito(){
        if(stock < contador){
            alert("No hay Stock del producto")
        }else{
            addItem(contador);
            setAgregado(true);
        }   }


 
    if(!agregado){
    return(
        <div className="itemcount" >
            
                <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                <span className="contador">{contador} </span>
                <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                onClick={agregar_a_carrito}></input>
            
        </div>
    )}
    else{
        return(
            <Link to='/cart'>Ir al carrito</Link>
        )
    }
}

export default ItemCount;