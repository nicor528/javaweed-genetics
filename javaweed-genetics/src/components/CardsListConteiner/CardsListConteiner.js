import { useEffect, useState } from "react";
import { getDB } from "../../Apis/Firebase";
import CardList from "./CardsList/CardList";
import './CardsListConteiner.css'


export default function CardsListConteiner(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function getData(){
            await getDB.then((resp)=> setProducts(resp)
            ).catch(error =>  (console.log("error FB", error)))
            }
        getData();
    },[])


    return(
        <div className="cardlist">
            <CardList products={products} ></CardList>
        </div>
    )
}       