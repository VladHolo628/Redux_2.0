import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartState = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const clickHandler = e => {
    dispatch(cartActions.toggleCart())
  }
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.amount}</span>
    </button>
  );
};

export default CartButton;
