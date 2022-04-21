import { createContext, useState } from "react";

export const CardContext = createContext();


const CardContextProvider = ({children}) => {

    const [cart , setCart ] = useState([]);

    //AÑADIENDO PRODUCTOS AL CARRITO
    const addToCart = (item , cantidad) => {
        //Sumando la cantidad de productos que se van a agregar al carrito
        let duplicado = cart.find(producto => producto.id === item.id)
        duplicado === undefined ?  setCart([...cart , {
            id: item.id,
            imagen: item.imagen,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: cantidad,
        }]) : duplicado.cantidad += cantidad

    }

    //ELIMINANDO TODOS LOS PRODUCTOS DEL CARRITO
    const deleteProduct = () => {
        setCart([])
    }

    //Elminando un producto del carrito
    const deleteOneProduct = (id) => {
        let deleteOneProduct = cart.filter(producto => producto.id != id )
        setCart(deleteOneProduct)
    }

    //ACTUALIZANDO BADGE EN EL CARRITO
    const updateBadge = () => {
        let badge = cart.reduce((acumulador , producto) => acumulador + producto.cantidad , 0)
        return badge
    }

    //ACTUALIZANDO TOTAL EN EL CARRITO
    const updateTotal = () => {
        let total = cart.reduce((acumulador , producto) => acumulador + (producto.precio * producto.cantidad) , 0)
        return total
    }

    //Sumando subtotales de cada producto
    const updateSubtotal = (id) => {
        let subtotal = cart.map(producto => producto.precio * producto.cantidad)
        return subtotal
    }

    return (
        <CardContext.Provider value={{cart , addToCart , deleteProduct , deleteOneProduct , updateBadge , updateTotal , updateSubtotal}}>
            {children}
        </CardContext.Provider>
    )


}

export default CardContextProvider