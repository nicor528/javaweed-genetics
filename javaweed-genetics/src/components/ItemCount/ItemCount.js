import './ItemCount.css'
import { useState} from "react";
import { Link} from 'react-router-dom';

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


    if(stock < 1){
        return (
            <div className="alert">
            <span>En estos momentos no contamos con Stock de este producto.</span>
            </div>
        )
    }


    if(!agregado && stock >= 1 ){
    return(
        <div className="itemcount" >
            
                <input type="button" value="+" className="boton_sumar" onClick={sumar_contador} ></input>
                <span className="contador">{contador} </span>
                <input type="button" value="-" className="boton_restar" onClick={restar_contador}></input>
                <input type="button" value="Agregar al carrito" className="boton_agregar_carrito" 
                onClick={agregar_a_carrito}></input>
            
        </div>
    )}
    if(agregado){
        return(
            <Link className='link' to='/cart'>Ir al carrito</Link>
        )
    }
}

export default ItemCount;