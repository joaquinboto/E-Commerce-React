import ItemCount from "./ItemCount"

export default function Items ({imagen , nombre , precio , stock}) {


        //FUNCION ALERTA CANTIDAD DE PRODUCTOS AGREGADOS
        const add = (cantidad ) => {
            alert(`Agregaste ${cantidad} ${nombre} al carrito`)
        }

    return (

        <div className="cardProducto">
            <img className="card-img-top" src={imagen}>
            </img>
            <div className="cardBody">
                <h5 className="card-title">
                    {nombre}
                </h5>
                <strong>Stock: {stock}</strong>
                <p className="card-text">
                    ${precio}
                </p>
                <ItemCount stock={stock} onAdd={add} ></ItemCount>
            </div>
        </div>





    )

}



