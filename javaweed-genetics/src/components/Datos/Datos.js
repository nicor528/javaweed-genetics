import { collection, getDocs } from 'firebase/firestore'
import {DB} from '../../Apis/Firebase'


            


export class products{
    constructor(id, productType, product, cost, stock, image, ciclovida, genetics, ){
        this.id = id;
        this.productType = productType;
        this.product = product;
        this.cost = cost;
        this.stock = stock;
        this.image = image;
        this. ciclovida = ciclovida;
        this.genetics = genetics;
    }

}

const productsList = []
let id = 0;
async function crear_productos(){
    await id++;
    await productsList.push(new products(id, "Semilla","Voladora", 2000, 5, "voladora.JPG", "3 meses", "Indica"))

}

crear_productos();

const produ = [
    {
        "id": 1,
        "titulo": "Voladora",
        "precio": "2000",
        "stock": 5,
        "imagen": "voladora.JPG",
        "porcentajes": "80% indica / 20% sativa",
        "ciclovida": "3 meses",
        "tipo": "indica"
    },
    {
        "id": 2,
        "titulo": "Del barrio",
        "precio": "2000",
        "stock": 5,
        "imagen": "del_barrio_cogo.JPG",
        "porcentajes": "80% indica / 20% sativa",
        "ciclovida": "3 meses",
        "tipo": "indica"
    },
    {
        "id": 3,
        "titulo": "Nevadita",
        "precio": "2000",
        "stock": 5,
        "imagen": "nevadita.JPG",
        "porcentajes": "80% indica / 20% sativa",
        "ciclovida": "3 meses",
        "tipo": "sativa"
    },
    {
        "id": 4,
        "titulo": "Uritorco",
        "precio": "2000",
        "stock": 5,
        "imagen": "uritorco.JPG",
        "porcentajes": "80% indica / 20% sativa",
        "ciclovida": "3 meses",
        "tipo": "hibrida"
    }
]



//export default getData;


