import "./ItemListContainer.css"
import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer(props){
    return(
        <div className="itemlistcontainer">

            <ItemCount Stock="5">
            </ItemCount>

        </div>
    )
}

export default ItemListContainer;