import {useState} from 'react'



const ItemCount = ({stock,initial , onAdd , nameProducto}) => {
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
        <button className="btn btn-primary" onClick={Aumentar} >+</button>
        <span>{cantidad}</span>
        <button className="btn btn-danger" onClick={Reducir}>-</button><button className="btn btn-primary" onClick={() => onAdd(cantidad , nameProducto)}>ADD TO CART</button> 
        </>


    )


}

export default ItemCount