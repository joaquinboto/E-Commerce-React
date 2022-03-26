import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';



const theme = {
    color: 'primary'
  };

const CartWidget = () => {

    return (

        <>
            <Badge badgeContent={4} color="secondary">
            <PermIdentityIcon/>
            <ShoppingCartIcon />
            </Badge>
        </>

    )


}



export default CartWidget