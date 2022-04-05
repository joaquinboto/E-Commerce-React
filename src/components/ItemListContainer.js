import ItemCount from "./ItemCount"
import ItemList from './ItemList'
import {autoFech} from '../products'
import React, {useState , useEffect} from 'react'
import Lottie from "lottie-react";
import loading from '../assets/loading.json'



const Container = () => {
    
    const load = {
        animationData : loading,
        autoplay: true,
        loop: true,
        style: {
            width: '20%',
        }
    }
    //CAMBIANDO ESTADO DE LOS PRODUCTOS
    const [producto , setProducto] = useState([])
    const [load2 , setLoad] = useState(<div className="row d-flex justify-content-center"><Lottie {...load}/></div>)
    //MONTANDO INFORMACION AL DOM DE LA PROMESA
    useEffect(() => {

        autoFech()
        .then((result) => setProducto(result))
        .then( () => setLoad('Productos:')) 
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
                    <h1 className="">{load2}</h1>
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