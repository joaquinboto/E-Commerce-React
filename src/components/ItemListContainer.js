import ItemCount from "./ItemCount"


const Container = ({props}) => {

    const add = (cantidad) => {
        alert(`Agregaste ${cantidad} productos al carrito`)
    }

    return (
        <>
            <div className="">
                <div className="container__Titulo row">
                    <h1 className="">{props}</h1>
                </div>
            </div>
            <ItemCount stock='5' initial='1' onAdd={add}/>    
        </>

    )


}

export default Container