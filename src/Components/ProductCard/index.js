import React from 'react'
import Button from '../Button'

const ProductCard = ({image, name, price}) => {
  return (
    <div className="ProductCard">
        <img alt="Product Img" src={image} className="ProductImg"></img>
        <h1>{name}</h1>
        <h1>{price}</h1>
        <div className="middle">
        <Button 
          style={{
              backgroundColor: "#2A254B",
              color: "#FFF",
              width: "fit-content",
            }}
            content={"Add to cart"}
          />
        </div>
    </div>
  )
}

export default ProductCard