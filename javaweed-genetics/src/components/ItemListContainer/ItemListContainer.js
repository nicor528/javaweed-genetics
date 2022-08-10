import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import getData from '../Datos/Datos'
import { useState } from "react";
import { useEffect } from "react";

function ItemListContainer(props){
    
    const[products,setProductos] = useState([]);

    useEffect(()=>{
        getData
        .then((resp)=>setProductos(resp)
        ).catch(err=>console.log(err))
        //.finally(()=> console.log(products))
    },[])

    return(
        <div className="itemlistcontainer">
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemListContainer;