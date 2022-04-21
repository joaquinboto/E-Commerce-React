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
            <button class="fancy" onClick={()=> onAdd(cantidad) } >
            <span class="top-key"></span>
            <span class="text">Agregar al carrito</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
            </button> 
            : 
            <button class="fancy" onClick={()=> onAdd(cantidad)} disabled>
                    <span class="top-key"></span>
                    <span class="text">Agregar la cantidad deseada</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
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