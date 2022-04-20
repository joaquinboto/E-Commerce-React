import { CardContext } from "./CardContext"
import {useContext} from 'react';



const Cart = () => {

    const test = useContext(CardContext);



    return(

        <div>
        
           {test.cart.map(item => {

               return(
                   <div>
                          <p>{item.nombre}</p>
                   </div>
               )
        })}
        
        </div>

    )

}

export default Cart