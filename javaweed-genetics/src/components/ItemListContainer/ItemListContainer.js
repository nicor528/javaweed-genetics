import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react";
import { useEffect } from "react";
import voladora from '../../img/voladora.svg'
import delBarrio from '../../img/del_barrio_cogo.svg'
import nevadita from '../../img/nevadita.svg'
import uritorco from "../../img/uritorco.svg"

const produ = [
    {
        "id": 1,
        "titulo": "Voladora",
        "precio": "2000",
        "stock": 5,
        "imagen": voladora,
        "tipo": "Indica"
    },
    {
        "id": 2,
        "titulo": "Del barrio",
        "precio": "2000",
        "stock": 5,
        "imagen": delBarrio,
        "tipo": "Indica"
    },
    {
        "id": 3,
        "titulo": "Nevadita",
        "precio": "2000",
        "stock": 5,
        "tipo": "Sativa",
        "imagen": nevadita
    },
    {
        "id": 4,
        "titulo": "Uritorco",
        "precio": "2000",
        "stock": 5,
        "tipo": "Hibrida",
        "imagen": uritorco
    }
]




function ItemListContainer(props){
    
    const getData = new Promise((res,rej)=>{
        if(true){
            setTimeout(()=>{
                res(produ)
            }, 2000);
        }
    })

    const[products,setProductos] = useState([]);

    useEffect(()=>{
        getData.then((resp)=>setProductos(resp)
        ).catch(err=>console.log(err))
        .finally(()=> console.log(products))
    },[])



    return(
        <div className="itemlistcontainer">
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemListContainer;