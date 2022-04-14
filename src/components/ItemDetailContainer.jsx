
import React, {useState , useEffect} from 'react'
import {autoFech} from '../products'
import {ItemDetail} from './ItemDetail'
import {products} from '../products'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [productos , setProducts] = useState({})
    const {ItemId} = useParams()

    useEffect(() => {

            autoFech(products.find(product => product.id === parseInt(ItemId)))
            .then((result) => setProducts(result))
            .catch((err) => console.error(err))
        
    },[ItemId])
    
    return (

        <>
        <ItemDetail productos={productos}></ItemDetail>
        </>



    )


}

export default ItemDetailContainer