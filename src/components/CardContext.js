import { createContext, useState } from "react";

export const CardContext = createContext();


const CardContextProvider = ({children}) => {

    const [cart , setCart ] = useState([]);

    const addToCart = (item) => {
        console.log(item)
        setCart([...cart , item])
    }

    return (
        <CardContext.Provider value={{cart , addToCart}}>
            {children}
        </CardContext.Provider>
    )


}

export default CardContextProvider