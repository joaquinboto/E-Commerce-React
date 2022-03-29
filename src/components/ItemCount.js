import {useState} from 'react'



const ItemCount = ({stock},{initial}) => {

    const [iniciar , setInitial] = useState(0)
    const Aumentar = () => {

        if (iniciar < stock) {
        setInitial(iniciar + 1)
    }
}
    const Reducir = () => {

        if (iniciar > 0) {
            setInitial(iniciar - 1)

        }
    }

    return (

        <>
        <button className="btn btn-primary" onClick={Aumentar} >+</button><span>{iniciar}</span> <button className="btn btn-danger" onClick={Reducir}>-</button> <button className="btn btn-primary">ADD TO CART</button> 
        </>


    )


}

export default ItemCount