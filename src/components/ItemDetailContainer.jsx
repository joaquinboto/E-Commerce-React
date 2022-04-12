
import React, {useState , useEffect} from 'react'
import {autoFech} from '../products'
import {ItemDetail} from './ItemDetail'





const ItemDetailContainer = () => {

    const [products , setProducts] = useState({})


    useEffect(() => {

        autoFech()
        .then(result => setProducts(result[5]))
        .catch(err => console.error(err))

    },[])
    
    return (

        <>
        <ItemDetail productos={products}></ItemDetail>
        
        </>



    )


}

export default ItemDetailContainer