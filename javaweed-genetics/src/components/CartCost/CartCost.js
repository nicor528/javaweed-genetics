import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import './CartCost.css'


export default function CartCost(props){

    const {makeBuyOrder} = useContext(CartContext)



    return(
        <div className='cartcost'>
            <span>Total a pagar: </span>
            <span> ${props.precioFinal} </span>
        </div>
    )
}