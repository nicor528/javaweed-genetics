import React, { useState } from "react";
import Item from "../components/Item/Item";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }){
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {

    }

    return(
        <CartContext.Provider value={addItemToCart}>
            {children}
        </CartContext.Provider>
    )
}