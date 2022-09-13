import './CartCost.css'


export default function CartCost(props){

    return(
        <div className='cartcost'>
            <span>Total a pagar: </span>
            <span> ${props.precioFinal} </span>
        </div>
    )
}