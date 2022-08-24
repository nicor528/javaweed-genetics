import "./ItemDetailsConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import getData from '../Datos/Datos'
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemDescription from '../ItemDescription/ItemDescription';
import {getDBbyID,} from "../../Apis/Firebase";



function ItemDetailsConteiner() {
    const {iditem} = useParams();
    const [products, setProducts] = useState({})

/*    const getDB_ID = new Promise((res,rej)=>{
        const itemRef = doc(DB,'productos',iditem);
        getDoc(itemRef).then(snapshot => {
            if(snapshot.exists()){
                const product = {
                    id: snapshot.id,
                    ...snapshot.data()
                }
                res(product)
            }
        }).catch(error => rej(console.log("Error", error)))
    })*/

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

   /* useEffect(()=>{
        let id = iditem;
        async function getData(){
            await getDB.then((resp)=> fullProducts = resp
            ).catch(error =>  error)
            data = await fullProducts.find(elemento => elemento.id == id)
            setProducts(data)
        }
        getData();
    },[iditem])*/
/*
    useEffect(()=>{
        async function getData(){
            await getDB_ID.then((res)=> data = res
            ).catch(error => error)
            setProducts(data)
        }
        getData()
    },[iditem])*/

    useEffect(()=>{
        getDBbyID(iditem).then(res => setProducts(res)
        ).catch(error => console.log(error))
    }, [iditem])

    return(
        <div className="itemdetailsconteiner">
        <ItemDescription {...products} />
        <ItemDetails {...products}> </ItemDetails>
        </div>
    )
}

export default ItemDetailsConteiner;