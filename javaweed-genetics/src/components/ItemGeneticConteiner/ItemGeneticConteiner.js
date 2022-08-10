import "./ItemGeneticConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from '../Datos/Datos'
import ItemList from '../ItemList/ItemList'

function ItemGeneticsConteiner(){
    
    let totalproductos = [];
    const {genetics} = useParams();
    const [products, setProducts] = useState([]);
    let data;
    
    useEffect(()=>{
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
    }, [genetics])
    
    return(
        <div className="itemgeneticcontainer">
            <ItemList products={products}>
            </ItemList>
        </div>
    )
}

export default ItemGeneticsConteiner;