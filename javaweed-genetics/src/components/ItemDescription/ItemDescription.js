import './ItemDescription.css'

export default function ItemDescription({Ciclovida, Porcentajes}){
    return(
        <div className="description">
            <li>Ciclo de vida de la planta: {Ciclovida}</li>
            <li>{Porcentajes} </li>
            <li>Relevando demas detalles de los productos</li>
        </div>
    )
}