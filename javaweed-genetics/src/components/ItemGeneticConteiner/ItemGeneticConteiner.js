import "./ItemGeneticConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import getData from '../Datos/Datos'
import ItemList from '../ItemList/ItemList'
import { getDB } from "../../Apis/Firebase";

function ItemGeneticsConteiner(){
    
    let totalproductos = [];
    const {genetics} = useParams();
    const [products, setProducts] = useState([]);
    let data;
    
/*   useEffect(()=>{
        async function infoProduct(){
            let genetica = genetics.toString();
            console.log(genetica)
            await getData
            .then((resp)=>totalproductos = resp
            ).catch(err=>console.log(err))
            data = await totalproductos.filter(elemento => elemento.tipo == genetica)
            setProducts(data)
        }    
        infoProduct();
    }, [genetics])*/
    
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
        <div className="itemgeneticcontainer">
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemGeneticsConteiner;