import React from 'react'

const ProductCard = ({image, name, price}) => {
  return (
    <div className="ProductCard">
        <img alt="Product Img" src={image} className="ProductImg"></img>
        <h1>{name}</h1>
        <h1>{price}</h1>
    </div>
  )
}

export default ProductCard