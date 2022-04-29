
import React, {useState , useEffect} from 'react'
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import db from '../firebaseConfig';


const ItemDetailContainer = () => {

    const [productos , setProducts] = useState({})
    const {ItemId} = useParams()

    useEffect(() => {

            const DataFetch = async (ItemId) => {

                const docRef = doc(db, "products", ItemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    return {
                        id: ItemId,
                        ...docSnap.data()
                    }
                  } else {
                    console.log("No hay contenido");
                  }
            }

            DataFetch(ItemId).then(data => setProducts(data))

        
    },[ItemId])
    
    return (

        <>
        <ItemDetail productos={productos}></ItemDetail>
        </>



    )


}

export default ItemDetailContainer