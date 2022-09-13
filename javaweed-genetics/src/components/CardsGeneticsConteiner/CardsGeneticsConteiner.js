import './CardsGeneticsConteiner.css'
import CardList from '../CardsListConteiner/CardsList/CardList'
import { getDB } from "../../Apis/Firebase";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function CardsGeneticsConteiner (){

    const {genetics} = useParams();
    const [products, setProducts] = useState([]);
    let data;

    useEffect(()=>{
        let genetica = genetics;
        let fullProducts;
        async function getData(){
            await getDB.then((resp)=> fullProducts = resp
            ).catch(error =>  error)
            data = await fullProducts.filter(elemento => elemento.genetica == genetica)
            setProducts(data)
        }
        getData();
    }, [genetics])

    return(
        <div className='genetics' >
            <CardList products={products} ></CardList>
        </div>
    )
}