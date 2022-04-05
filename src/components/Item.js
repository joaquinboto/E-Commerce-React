import ItemCount from "./ItemCount"

export default function Items ({imagen , nombre , precio , stock}) {

    return (

        <div className="cardProducto">
            <img className="card-img-top" src={imagen}>

            </img>
            <div className="card-body">
                <h5 className="card-title">
                    {nombre}
                </h5>
                <strong>Stock: {stock}</strong>
                <p className="card-text">
                    {precio}
                </p>
                <ItemCount stock={stock}></ItemCount>
            </div>
        </div>





    )

}



