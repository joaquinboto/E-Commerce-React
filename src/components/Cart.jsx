import { CardContext } from "./CardContext"
import {useContext} from 'react';
import  styled  from 'styled-components';


const Cart = () => {
    
    const test = useContext(CardContext);
    console.log(); 
    
    return(

        <ContainerCart>

            <RowCart>
               <form action="">
                    <Tabla>
                        <thead>
                            <tr>
                                <Td>Producto</Td>
                                <Td>Precio</Td>
                                <Td>Cantidad</Td>
                                <Td>Subtotal</Td>
                            </tr>
                        </thead>
                        <tbody>
                            {test.productos.map(product => {
                                return(
                                    <tr key={product.id}>
                                    <Td><ImgCart src={product.imagen} alt="imagenProducto" width="100px" height="100px"/>
                                        {product.nombre}</Td>
                                    <Td>{product.precio}</Td>
                                    <Td>
                                    <button id="bottone5" onClick={(e) => {
                                        e.preventDefault()
                                        test.increaseProduct(product.id)
                                    } }>+</button>
                                    {product.cantidad}
                                    <button id="bottone5" onClick={(e) => { 
                                        e.preventDefault()
                                        test.reduceProduct(product.id)
                                    }}>-</button>
                                    
                                    </Td>
                                    <Td >{test.updateSubtotal(product.id)}</Td>
                                    <Td><button onClick={() => test.deleteOneProduct(product.id)}>Eliminar Producto</button></Td>
                                    </tr>
)})}
                                    <tr>{test.productos.length === 0 ? <p>Carrito Vacio</p> : <button onClick={() => test.deleteProduct}>Vaciar Carrito</button>}</tr>
                                    <tr>Total: $ {test.updateTotal()} </tr>

                        </tbody>
                    </Tabla>
               </form>
            </RowCart>
            <RowCart>
                <div>
                <form action="">
                    <table>
                        <thead>
                            <th>
                                Resumen de la compra
                            </th>
                        </thead>
                        <tbody>
                            <tr>Envio: $500</tr>
                            <tr>{test.calcEnvio()}</tr>
                            <tr>Total del pedido:{test.updateTotal()}</tr>
                            <tr>{test.productos.length >= 1 ? <button>Terminar compra</button> : null}</tr>
                        </tbody>
                    </table>
                </form>
                </div>
            </RowCart>

        </ContainerCart>

)

}

export default Cart

export const ContainerCart = styled.div`

    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, 1fr);

`

export const RowCart = styled.div`

    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;

`

export const Tabla = styled.table`
    border: 4px solid #ebebeb;
    width: 100%;
    padding: 10px;
`

export const Td = styled.td`
    border: 4px solid #ebebeb;
    padding: 10px;
`

export const ImgCart = styled.img`

    max-width: 100%;
    height: auto;
`