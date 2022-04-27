import {useState } from 'react'
import '../Button.css'



const ItemCount = ({stock , onAdd }) => {
    const [cantidad , setInitial] = useState(0)

   

    const Aumentar = () => {

        if (cantidad < stock) {
        setInitial(cantidad + 1)
    }
}
    const Reducir = () => {

        if (cantidad > 0) {
            setInitial(cantidad - 1)
        }
    }


    return (

        <>
        <div className="divCount">

            {cantidad > 0  
            ?
            <button className="fancy" onClick={()=> onAdd(cantidad) } >
            <span className="top-key"></span>
            <span className="text">Agregar al carrito</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
            </button> 
            : 
            <button className="fancy" onClick={()=> onAdd(cantidad)} disabled>
                    <span className="top-key"></span>
                    <span className="text">Agregar la cantidad deseada</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            }
                
            <button id="bottone5" onClick={Aumentar} >+</button>
            <span>{cantidad}</span>
            <button id="bottone5" onClick={Reducir}>-</button>
        </div>
        </>


    )


}

export default ItemCount