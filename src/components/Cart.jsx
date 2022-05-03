import { CardContext } from "./CardContext"
import {useContext} from 'react';
import  styled  from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import {collection, serverTimestamp , setDoc , doc, updateDoc, increment} from 'firebase/firestore'
import db from '../firebaseConfig';


const Cart = () => {
    
    const test = useContext(CardContext);

    const createOrder = () => { 
        
        const itemsCopy = test.productos.map(producto => ({

            id: producto.id,
            title: producto.nombre,
            price: producto.precio,
            quantity: producto.cantidad,}))
        
        let order = {
            buyer :{
                name: "Messi",
                phone: 1235123,
                email: "joaquin.boto@hotmail.com",},
            date: serverTimestamp(),
            item: itemsCopy,
            total: test.updateTotal()
    }
    
    
    test.productos.forEach(async (item) => {
        const itemRef = doc(db, "products", item.id);
        await updateDoc(itemRef, {
          stock: increment(-item.cantidad)
        });
      });

    const createOrderInFirestore = async () => {
        const or = doc(collection(db, "orders"));
        await setDoc(or, order);
        return or;
      }

    createOrderInFirestore()
    .then(result => alert(`orden ${result.id}  creada , gracias ${order.buyer.name}`))


    test.deleteProduct()
}


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
                                    <Td><DeleteIcon style={{cursor: "pointer"}} onClick={() => test.deleteOneProduct(product.id)}></DeleteIcon></Td>
                                    </tr>
)})}
                                    <tr><td>{test.productos.length === 0 ? <p>Carrito Vacio</p> : <button onClick={() => test.deleteProduct}>Vaciar Carrito</button>}</td></tr>
                                    <tr><span>Total: $ {test.updateTotal()} </span></tr>

                        </tbody>
                    </Tabla>
               </form>
            </RowCart>
            <RowCart>
                <div>
                <form action="">
                    <table>
                        <thead>
                            <tr>
                                Resumen de la compra
                            </tr>
                        </thead>
                        <tbody>
                            <tr>{test.calcEnvio()}</tr>
                            <tr>Total del pedido: ${test.updateTotal()}</tr>
                        </tbody>
                    </table>
                    <p className="promotion">*Envio gratis a partir de $6000</p>
                </form>
                {test.productos.length >= 1 ? <button onClick={createOrder}>Terminar compra</button> : null}
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