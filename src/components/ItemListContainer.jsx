import ItemList from './ItemList'
import {autoFech} from '../products'
import React, {useState , useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../products'


const Container = () => {
    

    //CAMBIANDO ESTADO DE LOS PRODUCTOS
    const [producto , setProducto] = useState([])
    const {idCategory} = useParams()

    // MONTANDO INFORMACION AL DOM DE LA PROMESA
    useEffect(() => {
        if (idCategory === undefined) {
            autoFech(products.filter(product => product.idCategoria === 'Destacado'))
            .then((result) => setProducto(result))
            .catch((err) => console.error(err))
        }else {
            autoFech(products.filter(product => product.path === idCategory))
            .then((result) => setProducto(result))
            .catch((err) => console.error(err))
        }
    },[idCategory])


    return (
        <>
            <ItemList productos={producto}/>
        </>

    )

}

export default Container