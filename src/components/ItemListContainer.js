import ItemCount from "./ItemCount"


const Container = ({props}) => {

    const add = (cantidad , nameProducto ) => {
        alert(`Agregaste ${cantidad} ${nameProducto} al carrito`)
        
    }

    return (
        <>
            <div className="">
                <div className="container__Titulo row">
                    <h1 className="">{props}</h1>
                    <div>
                        <ItemCount stock='5' initial='1' nameProducto= {props} onAdd={add}/>   
                    </div> 
                </div>
            </div>
        </>

    )


}

export default Container