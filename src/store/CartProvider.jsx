import { useReducer } from "react";

import { CartContext } from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

export const CartProvider = (props) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchAction({type: 'ADD', item: item})
  };

  const removeItemFromCartHandler = id => {
    dispatchAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
   }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
