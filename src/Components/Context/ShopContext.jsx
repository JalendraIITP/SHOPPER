import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product'
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getCount = () => {
        let cntcart = 0;
        for (let index = 0; index < all_product.length + 1; index++) {
            if (cartItems[index]) cntcart++;
        }
        return cntcart;
    }
    const [Count, setCount] = useState(0);
    const addToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
        setCount(getCount());
    }

    const removeFromCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
        setCount(getCount());
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, Count };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider