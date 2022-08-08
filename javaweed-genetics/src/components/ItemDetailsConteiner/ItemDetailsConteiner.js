import "./ItemDetailsConteiner.css"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemDescription from '../ItemDescription/ItemDescription';
import voladora from '../../img/voladora.svg'
import delBarrio from '../../img/del_barrio_cogo.svg'
import nevadita from '../../img/nevadita.svg'
import uritorco from "../../img/uritorco.svg"



function ItemDetailsConteiner() {

    const produ = [
        {
            "id": 1,
            "titulo": "Voladora",
            "precio": "2000",
            "stock": 5,
            "imagen": voladora,
            "porcentajes": "80% indica / 20% sativa",
            "ciclovida": "3 meses",
            "tipo": "Indica"
        },
        {
            "id": 2,
            "titulo": "Del barrio",
            "precio": "2000",
            "stock": 5,
            "imagen": delBarrio,
            "porcentajes": "80% indica / 20% sativa",
            "ciclovida": "3 meses",
            "tipo": "Indica"
        },
        {
            "id": 3,
            "titulo": "Nevadita",
            "precio": "2000",
            "stock": 5,
            "tipo": "Sativa",
            "porcentajes": "80% indica / 20% sativa",
            "ciclovida": "3 meses",
            "imagen": nevadita
        },
        {
            "id": 4,
            "titulo": "Uritorco",
            "precio": "2000",
            "stock": 5,
            "tipo": "Hibrida",
            "porcentajes": "80% indica / 20% sativa",
            "ciclovida": "3 meses",
            "imagen": uritorco
        }
    ]

    const {iditem} = useParams();
    const [products, setProducts] = useState({})
    console.log(iditem)
    let data;

    useEffect(()=>{
        async function infoProduct(){
            let id = iditem;
            data = await produ.find(elemento => elemento.id == id)
            console.log(data)
            setProducts(data)
        }
        setTimeout(()=>{
            infoProduct();
        }, 2000);
    }, [iditem])

    

    return(
        <div className="itemdetailsconteiner">
        <ItemDescription {...products} />
        <ItemDetails {...products}> </ItemDetails>
        </div>
    )
}

export default ItemDetailsConteiner;