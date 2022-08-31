import { Button } from "bootstrap"
import { useContext} from "react"
import { CartContext } from "../../Contexts/CartContext"
import CartCost from "../CartCost/CartCost"
import CartItem from "../CartItem/CartItem"
import './CartItemConteiner.css'

export default function CartItemConteiner(){

    const {cartData, removeItemCart, cleanCart, totalAPagar, makeBuyOrder} = useContext(CartContext)

    function Button(){
        return <button className="botonclean" onClick={cleanCart} >Borrar todos los elementos del carrito </button>
    }

    const remove = (id) => { 
        removeItemCart({id})
        }

    function order (cartData) {
        const Buyer = {
            name: prompt("Ingrese su Nombre y Apellido"),
            phone: prompt("Ingrese su numero de telefono"),
            email: prompt("Ingrese su Email")
        }

        makeBuyOrder(cartData, Buyer)
    }

    return(
        <div className="cartitemconteiner">
            
            {(cartData.length > 0)? cartData.map((item) => {
                let precio = item.valor * item.cantidad;
                return (<CartItem removeItem={remove} nombre={item.nombre} id={item.id} key={item.id} cantidad={item.cantidad} valor={precio} imagen={item.imagen} ></CartItem>)
            } ) 
             : <span>No hay elentos en el carrito</span>}
            {(cartData.length > 0)? <CartCost precioFinal={totalAPagar(cartData)} Order={order}></CartCost> : <></> }
            {(cartData.length > 0)? <button onClick={order} > Confirmar Compra </button>: <></>}
            {(cartData.length > 0)? <Button/> : <></>}
        </div>
    )
}