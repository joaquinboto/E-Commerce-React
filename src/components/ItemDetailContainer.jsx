
import React, {useState , useEffect} from 'react'
import {autoFech} from '../products'
import {ItemDetail} from './ItemDetail'
import {products} from '../products'




const ItemDetailContainer = () => {

    const [productos , setProducts] = useState({})

    useEffect(() => {
            autoFech(products)
            .then((result) => setProducts(result[5]))
            .catch((err) => console.error(err))
} ,[])
    
    return (

        <>
        <ItemDetail productos={productos}></ItemDetail>
        </>



    )


}

export default ItemDetailContainer