
import React, {useState , useEffect} from 'react'
import {autoFech} from '../products'
import {ItemDetail} from './ItemDetail'
import {products} from '../products'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [productos , setProducts] = useState({})
    const ItemId = useParams()


    useEffect(() => {

        if (ItemId === undefined) {
            autoFech(products.find(product => product.id === 'Destacado'))
            .then((result) => setProducts(result))
            .catch((err) => console.error(err))
        }else {
            autoFech(products.find(product => product.id === ItemId))
            .then((result) => setProducts(result))
            .catch((err) => console.error(err))
        }
    },[ItemId])
    
    return (

        <>
        <ItemDetail productos={productos}></ItemDetail>
        </>



    )


}

export default ItemDetailContainer