import { createContext } from "react";
import React from "react";
import all_product from '../components/assets/img/all_product'


export const ShopConetxt = createContext(null);

const ShopContextProvider = (props)=>{
    const ContextValue = {all_product};

    return (
        <ShopConetxt.Provider value={ContextValue}>
            {props.children}
        </ShopConetxt.Provider>
    )
}

export default ShopContextProvider