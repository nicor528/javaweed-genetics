import React, { useEffect, useState } from "react";

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
        }) : [...cart, {id: item.id, cantidad: item.cantidad, imagen: item.Imagen, nombre: item.Nombre, precio: item.Precio }];
        setCart(inCart);
    }

    const removeItemCart = async (item) => {
        const inCart = await cart.filter((isProduct) => isProduct.id != item.id);
        setCart(inCart)
    }

    const cleanCart = () => {
        setCart([])
    }
    

    return(
        <CartContext.Provider value={{addItemToCart, removeItemCart, cleanCart , cartData: cart}}>
            {children}
        </CartContext.Provider>
    )
}