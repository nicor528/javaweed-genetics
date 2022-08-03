import './ItemCount.css'
import { useState } from "react";


function ItemCount(props){

    const [contador, setContador] = useState(1)
    let stock = props.stock;

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
        if(stock==0){
            alert("No hay Stock del producto")
        }else{
            alert("La cantidad seleccionada es: " + contador);
        }
    }

    return(
        <div className="itemcount" >
            
                <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                <span className="contador">{contador} </span>
                <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                onClick={agregar_a_carrito}></input>
            
        </div>

    )
}

export default ItemCount;