import ItemCount from "./ItemCount"
import styled from "styled-components"


export const Container = styled.div`
    height: 100%;
    width: 60%;
    position: relative;
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 50px auto;
    flex-wrap: wrap;
`

export const ItemDetail = ({productos}) => {

    const add = (cantidad ) => {
        alert(`Agregaste ${cantidad} ${productos.nombre}s al carrito`)
    }

    return (
        <Container>
        <div className="dvImagen">
            <img className="imgDetail" src={productos.imagen}>
            </img>
        </div>
            <div className="dvDetail">
                <div className="dvTitle">
                    <h5 className="titleDetail">
                        {productos.nombre}
                    </h5>
                    <strong>Stock: {productos.stock}
                            <h3>Precio:${productos.precio}</h3>
                    </strong>
                </div>
                <div className="dvDescription">
                    <p className="descriptionDetail">
                    Campera Cuero Roll
                    Campera de Cuero negro rígido con mangas y tejido rústico.
                    Calce: Slim Fit
                    Material: Cuero
                    </p>
                </div>
            <ItemCount stock={productos.stock} initial='1' onAdd={add}/>
            </div>
        </Container>
    )
}
