import {useState} from 'react'



const ItemCount = ({stock, onAdd }) => {
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

        <div>
        <div className="divCount">
            <button className="btn btn-primary" onClick={Aumentar} >+</button>
            <span>{cantidad}</span>
            <button className="btn btn-danger" onClick={Reducir}>-</button>
        </div>
        <button className="btn btn-primary" onClick={() => onAdd(cantidad)}>ADD TO CART</button> 
        </div>


    )


}

export default ItemCount