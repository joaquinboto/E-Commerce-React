import { CardContext } from "./CardContext"
import {useContext , useState} from 'react';
import  styled  from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';
import {collection, serverTimestamp , setDoc , doc, updateDoc, increment} from 'firebase/firestore'
import db from '../firebaseConfig';
import swal from "sweetalert";

const Cart = () => {
    
    const test = useContext(CardContext);
    const [input , setInput] = useState('');
    const [phone , setPhone] = useState('');
    const [email , setEmail] = useState('');

    const createOrder = () => { 
        
        const itemsCopy = test.productos.map(producto => ({

            id: producto.id,
            title: producto.nombre,
            price: producto.precio,
            quantity: producto.cantidad,}))
        
        let order = {
            buyer :{
                name: input,
                phone: phone,
                email: email,},
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
    .then(result => swal(`orden ${result.id}  creada , gracias ${order.buyer.name} , te estaremos contactando al numero ${order.buyer.phone} o al email: ${order.buyer.email}`))

    setEmail('')
    setPhone('')
    setInput('')
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
                                        <br />
                                        <span>Nombre:</span>{product.nombre}
                                        <br />
                                        <span>Color:</span> {product.color}
                                        <br/>
                                        <span>Talle:</span> {product.talla}
                                        </Td>
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
                                    <tr><td>{test.productos.length === 0 ? <p>Carrito Vacio</p> : <button onClick={(e) =>{
                                        e.preventDefault()
                                        swal({
                                            title: "¿Estas seguro de eliminar todos los productos?",
                                            buttons: ["No", "Si"],
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                        .then(respuesta =>{
                                            if (respuesta){
                                                test.deleteProduct()
                                            } else {
                                                return
                                            }
                                        })
                                    }}>Vaciar Carrito</button>}</td></tr>
                                    <tr><td><span>Total: $ {test.updateTotal()} </span></td></tr>

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
                            <label htmlFor="">
                            Nombre:
                             <input type="text" onChange={(e) => {
                            
                            setInput(e.target.value)
                            }} value={input} />
                            </label>
                            <hr />
                            <label htmlFor="">
                            Telefono:
                            <input type="number" onChange={(e) => {
                            
                            setPhone(e.target.value)
                            }} value={phone} />
                            </label>
                            <hr />
                            <label htmlFor="">
                            Email:
                            <input type="text" onChange={(e) => {
                            
                            setEmail(e.target.value)
                            }} value={email} />
                            </label>

                        </thead>
                        <tbody>
                            <tr>{test.calcEnvio()}</tr>
                            <tr>Total del pedido: ${test.updateTotal()}</tr>
                        </tbody>
                    </table>
                    <p className="promotion">*Envio gratis a partir de $6000</p>
                </form>
                {email == '' || phone == '' || input == '' ? <button disabled>Terminar compra</button> : <button onClick={() => createOrder()}>Terminar compra</button>}
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