import React from 'react'
import ProductItem from './ProductItem'

const PRODUCTS = [
  {id: 1, price: 6, title: 'My first Book', description: 'The first book ever wrote'},
  {id: 2, price: 16, title: 'Movies', description: 'Gyes movie'}
]


const Product = () => {
  return (
    <div>
      {
        PRODUCTS.map(product => (
          <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} />
        ))
      }
    </div>
  )
}

export default Product
