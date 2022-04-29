import ItemList from './ItemList'
import React, {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import db from '../firebaseConfig';
import { collection, query, getDocs, where, orderBy} from "firebase/firestore";



const Container = () => {
    

    //CAMBIANDO ESTADO DE LOS PRODUCTOS
    const [producto , setProducto] = useState([])
    const {idCategory} = useParams()

    // MONTANDO INFORMACION AL DOM DE LA PROMESA
    useEffect(() => {
        
        const dataFirestore = async (idCategory) => {
            let q;
        
            if (idCategory) {
                q = query(collection(db, "products"), where("path", "==", idCategory));
            }
             else {
                q = query(collection(db, "products"),orderBy("idCategoria" , "desc"));
            }
        
            const querySnapshot = await getDocs(q);
            let dataFrom = querySnapshot.docs.map(doc => (
                {
                id: doc.id,
                ...doc.data()
                }
            ));
            
            return dataFrom;
        }

        dataFirestore(idCategory)
        .then(data => setProducto(data))


    },[idCategory])

    

    return (
        <>
            <ItemList productos={producto}/>
        </>

    )

}

export default Container