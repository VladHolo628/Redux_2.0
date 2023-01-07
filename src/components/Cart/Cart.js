import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartState = useSelector(state => state.cart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.productList.map(item => {
          return (
            <CartItem key={item.title}
            item={{ title: item.title, quantity: item.amount, total: item.price * item.amount, price: item.price }}
          />
          )
    
        })}

      </ul>
    </Card>
  );
};

export default Cart;
