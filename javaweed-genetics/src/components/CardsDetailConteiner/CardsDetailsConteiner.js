import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDBbyID } from "../../Apis/Firebase";
import CardsDetails from "./CardsDetails/CardsDetails";
import './CardsDetailsConteiner.css';



export default function CardsDetailsConteiner(){
    const {iditem} = useParams();
    const [products, setProducts] = useState({})

    useEffect(()=>{
        getDBbyID(iditem).then(res => setProducts(res)
        ).catch(error => console.log(error))
    }, [iditem])

    return(
        <div className="conteiner" >
            <CardsDetails products={products} ></CardsDetails>
        </div>
    )
}