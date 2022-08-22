import Item from '../Item/Item'
import './ItemList.css'

function ItemList({products}){
    
    return(
        <div className="itemlist">
            {products.map(data =>{
                return(
                    <Item
                        key={data.id}
                        id = {data.id}
                        titulo = {data.Nombre}
                        precio = {data.Precio}
                        stock = {data.Stock}
                        imagen = {data.Imagen}
                    />
                )})}
        </div>
    )
}  

export default ItemList;