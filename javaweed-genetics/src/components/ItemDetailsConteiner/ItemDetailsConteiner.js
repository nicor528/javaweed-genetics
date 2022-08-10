import "./ItemDetailsConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from '../Datos/Datos'
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemDescription from '../ItemDescription/ItemDescription';


function ItemDetailsConteiner() {
    let totalproductos = [];
    const {iditem} = useParams();
    const [products, setProducts] = useState({})
    console.log(iditem)
    let data;

    useEffect(()=>{
        async function infoProduct(){
            let id = iditem;
            await getData
            .then((resp)=>totalproductos = resp
            ).catch(err=>console.log(err))
            data = await totalproductos.find(elemento => elemento.id == id)
            console.log(data)
            setProducts(data)
        }    
        infoProduct();
    }, [iditem])

    return(
        <div className="itemdetailsconteiner">
        <ItemDescription {...products} />
        <ItemDetails {...products}> </ItemDetails>
        </div>
    )
}

export default ItemDetailsConteiner;