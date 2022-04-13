import ItemCount from "./ItemCount"
import styled from "styled-components"


export const Container = styled.div`
    width: 70%;
    max-width: 1100px;
    height: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: minmax(100px, auto);
    margin: 20px auto;
    row-gap: 1em;
`

export const Row = styled.div`
   width: 70%;
   height: 100%;
   display:flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   border: 1px solid black;
   margin: auto;
`

export const ItemDetail = ({productos}) => {

  
    
    return (
        <Container>
            <Row>
            <img className="imgDetail" src={productos.imagen}></img>
            </Row>
            <Row>
            <h1>{productos.nombre}</h1>
            </Row>
            <Row>
            <h5>Precio: ${productos.precio}</h5>
            </Row>
            <Row>
            <ItemCount></ItemCount>
            </Row>
        </Container>
    )
}
