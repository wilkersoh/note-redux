import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const ProductItem = ({ title, description, price, id }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addItemToCart({
      id,
      price,
      title,
    }))
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: {price}</p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
};

export default ProductItem
