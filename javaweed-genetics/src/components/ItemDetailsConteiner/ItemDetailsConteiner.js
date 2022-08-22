import "./ItemDetailsConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import getData from '../Datos/Datos'
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemDescription from '../ItemDescription/ItemDescription';
import { getDB } from "../../Apis/Firebase";


function ItemDetailsConteiner() {
    const {iditem} = useParams();
    const [products, setProducts] = useState({})
    let data;
    let fullProducts;

 /*   useEffect(()=>{
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
    }, [iditem])*/

    useEffect(()=>{
        let id = iditem;
        async function getData(){
            await getDB.then((resp)=> fullProducts = resp
            ).catch(error =>  error)
            data = await fullProducts.find(elemento => elemento.id == id)
            setProducts(data)
        }
        getData();
    },[iditem])

    return(
        <div className="itemdetailsconteiner">
        <ItemDescription {...products} />
        <ItemDetails {...products}> </ItemDetails>
        </div>
    )
}

export default ItemDetailsConteiner;