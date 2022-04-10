import ItemCount from "./ItemCount"
import styled from "styled-components"


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    margin: 50px auto;
    grid-row: 1/2;
    grid-column: 1/2;
`

export const GridDetail = styled.div`
    display: grid;
    grid-auto-rows: minmax(120px , auto);
    align-items: center;
    justify-items: center;

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
            <GridDetail>
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
            </GridDetail>
        </Container>
    )
}
