import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { DB, updateStock } from "../Apis/Firebase";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }){
    const [cart, setCart] = useState([]);
    
    const addItemToCart = async (item) => {
        const inCart  = await cart.find((isProduct) => isProduct.id == item.id )
        ? await cart.map((isProduct) => {
            if(isProduct.id == item.id){
                return{
                    ...isProduct, cantidad: isProduct.cantidad + item.cantidad,
                };
            }return isProduct;
        }) : [...cart, {id: item.id, cantidad: item.cantidad, imagen: item.imagen, nombre: item.nombre, valor: item.valor  }];
        setCart(inCart);
    }

    const removeItemCart = async (item) => {
        const inCart = await cart.filter((isProduct) => isProduct.id != item.id);
        setCart(inCart)
    }

    const cleanCart = () => {
        setCart([])
    }

    const totalAPagar = (item) => {
        let total = 0;
        item.forEach(element => {
            let totalItem = parseInt(element.cantidad) * parseInt(element.valor) ;
            total = total + totalItem
        });
        return parseInt(total);
    }

    const makeBuyOrder = async (Buyer) => {
        let items
        items = await cart.map(cart => ({
            ...items, id: cart.id,
            nombre: cart.nombre,
            cantidad: cart.cantidad,
            valor: cart.valor
        }))
    
        let order = {
            buyer: Buyer,
            items: items,
            total: totalAPagar(cart),
            date: serverTimestamp()
        }


        const createOrder = (order) => {
            const orderColection = collection(DB, "compras")
            addDoc(orderColection, order).then(({id}) => alert("El codigo de su compra es: " + id))
            .catch(error => console.log(error)) 
        } 

        await createOrder(order);
        await updateStock(cart);
        await cleanCart();
        
    }
    

    return(
        <CartContext.Provider value={{makeBuyOrder, totalAPagar, addItemToCart, removeItemCart, cleanCart , cartData: cart}}>
            {children}
        </CartContext.Provider>
    )
}