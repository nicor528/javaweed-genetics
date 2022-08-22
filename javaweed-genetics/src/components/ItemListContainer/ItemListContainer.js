import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
//import getData from '../Datos/Datos'
import { useState } from "react";
import { useEffect } from "react";
import { getDB } from "../../Apis/Firebase";

function ItemListContainer(props){
    
    const[products,setProductos] = useState([]);

//    useEffect(()=>{
//        getData
//        .then((resp)=>setProductos(resp)
//        ).catch(err=>console.log(err))
//        .finally(()=> console.log(products))
//    },[])

    useEffect(()=>{
        async function getData(){
            await getDB.then((resp)=> setProductos(resp)
            ).catch(error =>  (console.log("error FB", error)))
            }
        getData();
    },[])

    return(
        <div className="itemlistcontainer">
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemListContainer;