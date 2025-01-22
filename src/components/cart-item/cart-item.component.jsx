import './cart-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem}) => {
    const {name,quantity}=cartItem;
    return (
        <div className='cart-item-container'>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
};

export default CartItem;