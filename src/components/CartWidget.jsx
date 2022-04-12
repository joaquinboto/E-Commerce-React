import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';



const CartWidget = () => {

    return (

        <div className="cartWidget">
            <Badge badgeContent={4} color="secondary">
            <PermIdentityIcon/>
            <ShoppingCartIcon />
            </Badge>
        </div>

    )


}



export default CartWidget