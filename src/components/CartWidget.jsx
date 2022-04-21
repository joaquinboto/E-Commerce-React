import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { useContext } from 'react';
import { CardContext } from './CardContext';


const CartWidget = () => {
    
    const test = useContext(CardContext);

    return (

        <div className="cartWidget">
            <Badge badgeContent={test.updateBadge()} color="secondary">
            <PermIdentityIcon/>
            <ShoppingCartIcon />
            </Badge>
        </div>

    )


}



export default CartWidget