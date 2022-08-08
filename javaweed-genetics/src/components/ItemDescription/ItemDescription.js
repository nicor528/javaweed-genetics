import './ItemDescription.css'

export default function ItemDescription({ciclovida, porcentajes}){
    return(
        <div className="description">
            <li>Ciclo de vida de la planta: {ciclovida}</li>
            <li>{porcentajes} </li>
            <li>Relevando demas detalles de los productos</li>
        </div>
    )
}