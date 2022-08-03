import Item from '../Item/Item'
import './ItemList.css'

function ItemList({products}){
    
    return(
        <div className="itemlist">
            {products.map(data =>{
                return(
                    <Item
                        ID = {data.id}
                        titulo = {data.titulo}
                        precio = {data.precio}
                        stock = {data.stock}
                        imagen = {data.imagen}
                    />
                )})}
        </div>
    )
}  

export default ItemList;