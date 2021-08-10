import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../store/cart-slice';

const Cart = () => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const cartItems = useSelector((state) => state.cart.items);

  const removeItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  const addItem = (item) => {
    const {price, id} = item;

    dispatch(cartActions.addItemToCart({
      id,
      price,
    }))
  }

  return (
    <div>
      <div>Cart: number {cartQuantity}</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>title: {item.name}</p>
            <p>totalPrice: {item.totalPrice}</p>
            <p>price: {item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove item</button>
            <button onClick={() => addItem(item)}>Add item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart
