import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CartWidget = () => {

    return (

        <>
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
            </Badge>
        </>

    )


}



export default CartWidget