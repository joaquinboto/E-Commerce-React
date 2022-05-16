import ItemCount from "./ItemCount"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CardContext } from "./CardContext"
import swal from "sweetalert";

export const ItemDetail = ({productos}) => {

    const [item , setItem] = useState(0)
    const [color , setColor] = useState('')
    const [talla, setTalla] = useState('')
    const test = useContext(CardContext)
    
    

    const onAdd = (cantidad) => { 

        if (color === '' || talla === '') {
            swal({
                title: 'Agregue una talla y un color',
                icon: 'warning',
                buttons: 'Ok',
                dangerMode: true,
                
            })
        } else { 
            setItem(cantidad)
            test.addToCart(productos , cantidad , color , talla)
        }

  
    }

    return (
        <Container >
            <Row key={productos.id}>
            <img className="imgDetail" alt="imagenProduct" src={productos.imagen}></img>
            </Row>
            <div>
                <nav><Link className="navLinkDetail" to="/">Inicio</Link><span> / </span><Link className="navLinkDetail" to={`/category/${productos.path}`}>{productos.path}</Link></nav>
                <Form>
                <h1 className="titleDetail" >{productos.nombre}</h1>
                <p className="priceDetail">Precio: ${productos.precio}</p>
                <p className="stockDetail">Stock: {productos.stock}</p>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est, perferendis porro enim error dolore quis quae voluptates dignissimos voluptate tenetur officia maiores cupiditate eveniet natus repudiandae sit illum adipisci.</p>
                </div>
                <form action="">
                    <Table>
                        <Tbody>
                            <tr>
                                <td>
                                   <label htmlFor="">Colores:</label>
                                </td>
                                <td>
                                    <select name="" id="options" onChange={(e) => setColor(e.target.value)}>
                                        <option value="">Elije tu color</option>
                                        <option value="Rojo">Rojo</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Verde">Verde</option>
                                        <option value="Amarillo">Amarillo</option>
                                    </select>
                                </td>
                            </tr>
                        </Tbody>
                        <Tbody>
                            <tr>
                                <td>
                                    <label htmlFor="">Tallas:</label>
                                </td>
                                <td>
                                    <select name="" id="options" onChange={(e) => setTalla(e.target.value)}>
                                        <option value="">Elije tu talla</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </td>
                            </tr>
                        </Tbody>
                    </Table>
                </form>

                    {item === 0 ? <ItemCount stock={productos.stock} onAdd={onAdd}></ItemCount> 
                    : 
                    <Link className="nav-subMenu" to="/Cart">
                    <button className="cta">
                        <span className="hover-underline-animation"> Shop now</span>
                            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                    </Link>}
                    
                </Form>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    width: 70%;
    max-width: 1100px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, 750px);
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
   margin: auto;
`

export const Form = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 20px;
`

export const Tbody = styled.tbody`
display: flex;
width: 295px;
justify-content: space-around;
align-items: center;
`

export const Table = styled.table`
height: 200px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
`