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
                            {test.cart.map(product => {
                                return(
                                    <>
                                    <tr key={product.id}>
                                    <Td><ImgCart src={product.imagen} alt="imagenProducto" width="100px" height="100px"/>
                                        {product.nombre}</Td>
                                    <Td>{product.precio}</Td>
                                    <Td>{product.cantidad}</Td>
                                    <Td>{test.updateSubtotal()}</Td>
                                    <Td><button onClick={() => test.deleteOneProduct(product.id)}>Eliminar Producto</button></Td>
                                    </tr>
                                    </>)})}

                                    {test.cart.length === 0 ? <><h6>Carrito Vacio</h6></> : <><button onClick={() => test.deleteProduct}>Vaciar Carrito</button></>}
                                    <tr>Total: $ {test.updateTotal()} </tr>
                        </tbody>
                    </Tabla>
               </form>
            </RowCart>
            <RowCart>

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
    border: 1px solid #000;
    width: 100%;
`

export const Td = styled.td`

    border: 1px solid #000;
    padding: 10px;
`

export const ImgCart = styled.img`

    max-width: 100%;
    height: auto;
`