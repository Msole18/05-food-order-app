import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import { CartContext } from '../../store/cart-context'
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
    const cartContxt = useContext(CartContext);

    const numberOfCartItems = cartContxt.items.reduce((curNumber, items) => {
        return curNumber + items.amount;
    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;