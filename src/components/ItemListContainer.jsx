import ItemList from './ItemList'
import {autoFech} from '../products'
import React, {useState , useEffect} from 'react'
import ItemDetailContainer from './ItemDetailContainer'
// import Lottie from "lottie-react";
// import loading from '../assets/loading.json'



const Container = () => {
    
    // const load = {
    //     animationData : loading,
    //     autoplay: true,
    //     loop: true,
    //     style: {
    //         width: '10%',
    //     }
    // }
    //CAMBIANDO ESTADO DE LOS PRODUCTOS
    const [producto , setProducto] = useState([])
    // const [load2 , setLoad] = useState(<div id="loading-container" className="row d-flex justify-content-center"><Lottie {...load}/></div>)
    //MONTANDO INFORMACION AL DOM DE LA PROMESA
    useEffect(() => {

        autoFech()
        .then((result) => setProducto(result))
        .catch((err) => console.error(err))
    },[])


    return (
        <>
            <div className="mainContainer">
            <ItemList productos={producto}/>
            <ItemDetailContainer></ItemDetailContainer>
            </div>
        </>

    )

}

export default Container