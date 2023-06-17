import { useContext } from "react";
import { Modal }  from "../UI/Modal";
import classes from "./Cart.module.css";
import {CartContext} from "../../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartContxt = useContext(CartContext);

  const totalAmount = `$${cartContxt.totalAmount.toFixed(2)}`;
  const hasItems = cartContxt.items.length > 0;
  
  const cartItemRemoveHandler = id => {};
  const cartItemAddHandler = cartItems => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      
      {cartContxt.items.map(item => (
        <CartItem 
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}; 


