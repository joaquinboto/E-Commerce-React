import { createContext, useState } from "react";


export const CardContext = createContext();


const CardContextProvider = ({children}) => {

    const [productos , setProductos ] = useState([]);

    //AÑADIENDO PRODUCTOS AL CARRITO
    const addToCart = (item , cantidad) => {
        //Sumando la cantidad de productos que se van a agregar al carrito
        let duplicado = productos.find(producto => producto.id === item.id)
        duplicado === undefined ?  setProductos([...productos , {
            id: item.id,
            imagen: item.imagen,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: cantidad,
            stock: item.stock
        }]) : duplicado.cantidad += cantidad
    }

    //ELIMINANDO TODOS LOS PRODUCTOS DEL CARRITO
    const deleteProduct = () => {
        setProductos([])
    }

    //Elminando UN producto del carrito
    const deleteOneProduct = (id) => {
        let deleteOneProduct = productos.filter(product => product.id !== id )
        setProductos(deleteOneProduct)
    }

    //ACTUALIZANDO BADGE EN EL CARRITO
    const updateBadge = () => {
        let badge = productos.reduce((acumulador , product) => acumulador + product.cantidad , 0)
        return badge
    }

    //ACTUALIZANDO TOTAL EN EL CARRITO
    const updateTotal = () => {
        let total = productos.reduce((acumulador , product) => acumulador + (product.precio * product.cantidad) , 0)
        return total
    }

    //Sumando subtotales de cada producto
    const updateSubtotal = (id) => {
        const index = productos.map(product => product.id).indexOf(id)
        return productos[index].precio * productos[index].cantidad
    }

    //ACTUALIZANDO LA CANTIDAD DE PRODUCTOS
    const reduceProduct = (id) => {
        let index = productos.map(product => product.id).indexOf(id)
        if (productos[index].cantidad > 1) {
            productos[index].cantidad -= 1
            setProductos([...productos])
        } else {
            deleteOneProduct(id)
        }
    }

    //ACTUALIZANDO LA CANTIDAD DE PRODUCTOS
    const increaseProduct = (id) => {
        let stock = productos.map(product => product.stock)
        let index = productos.map(product => product.id).indexOf(id)
        if (productos[index].cantidad < stock[index]) {
            productos[index].cantidad += 1
            setProductos([...productos])
        }
    }

    //CALCULANDO ENVIO
    const calcEnvio = () => {
        let totalConEnvio = updateTotal() - 1000

        if (totalConEnvio < 5000) {
            return ( 
                <>
                <tr>Envio: $1000</tr>
                {productos.length > 0 ? <tr>Precio con envio: {totalConEnvio + 2000}</tr> : null}
                </>
            )
        } else {
            return (
            <tr>ENVIO GRATIS!</tr>)
        }

    }


    return (
        <CardContext.Provider value={{
            productos ,
            addToCart,
            deleteProduct,
            deleteOneProduct,
            updateBadge,
            updateTotal,
            updateSubtotal,
            reduceProduct,
            increaseProduct,
            calcEnvio
            }}>
            {children}
        </CardContext.Provider>
    )


}

export default CardContextProvider