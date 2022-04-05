import ItemCount from "./ItemCount"
import ItemList from './ItemList'
import {autoFech} from '../products'
import React, {useState , useEffect} from 'react'


const Container = () => {

    //CAMBIANDO ESTADO DE LOS PRODUCTOS
    const [producto , setProducto] = useState([])
    //MONTANDO INFORMACION AL DOM DE LA PROMESA
    useEffect(() => {

        autoFech()
        .then((result) => setProducto(result))
        .catch((err) => console.error(err))
    },[])

    //FUNCION ALERTA CANTIDAD DE PRODUCTOS AGREGADOS
    const add = (cantidad ) => {
        alert(`Agregaste ${cantidad} productos al carrito`)
    }

    return (
        <>
            <div className="">
                <div className="container__Titulo row">
                    <h1 className="">Productos</h1>
                    <div>
                         <ItemList productos={producto}/>
                        <ItemCount stock='5' initial='1' onAdd={add}/>
                    </div> 
                </div>
            </div>
        </>

    )

}

export default Container