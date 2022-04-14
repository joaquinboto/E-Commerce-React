import ItemCount from "./ItemCount"
import styled from "styled-components"
import { Link } from "react-router-dom"


export const Container = styled.div`
    width: 70%;
    max-width: 1100px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    margin: 20px auto;
`

export const Row = styled.div`
   width: 100%;
   height: 100%;
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   flex-wrap: wrap;
   border: 1px solid black;
   margin: auto;
   {}
`

export const Form = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px;
`

export const ItemDetail = ({productos}) => {

  
    
    return (
        <Container >
            <Row key={productos.id}>
            <img className="imgDetail" alt="imagenProduct" src={productos.imagen}></img>
            </Row>
            <div>
                <nav><Link className="navLinkDetail" to="/">Inicio</Link><span> / </span><Link className="navLinkDetail" to={`/category/${productos.path}`}>{productos.nombre}</Link></nav>
                <Form>
                <h1 className="titleDetail" >{productos.nombre}</h1>
                <p className="priceDetail">Precio: ${productos.precio}</p>
                <p className="stockDetail">Stock:{productos.stock}</p>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est, perferendis porro enim error dolore quis quae voluptates dignissimos voluptate tenetur officia maiores cupiditate eveniet natus repudiandae sit illum adipisci.</p>
                </div>
                <form action="">
                    <table>
                        <tbody>
                            <th>
                               <label htmlFor="">Colores</label>
                            </th>
                            <td>
                                <select name="" id="">
                                    <option value="">Elije tu color</option>
                                    <option value="">Rojo</option>
                                    <option value="">Azul</option>
                                    <option value="">Verde</option>
                                    <option value="">Amarillo</option>
                                </select>
                            </td>
                        </tbody>
                        <tbody>
                            <th>
                                <label htmlFor="">Tallas</label>
                            </th>
                            <td>
                                <select name="" id="">
                                    <option value="">Elije tu talla</option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                    <option value="">XL</option>
                                </select>
                            </td>
                        </tbody>
                    </table>
                </form>
                    <ItemCount stock={productos.stock}></ItemCount>
                </Form>
            </div>
        </Container>
    )
}
