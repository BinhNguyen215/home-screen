import React from 'react'
import { PRODUCT } from '../../Const'
import ProductCard from '../ProductCard'
import Button from "../Button";

const Listings = () => {
  return (
    <div className="listings">
      <div className="listings__top">
        <h1 className="listings__text">New ceramics</h1>
      </div>
      <div className="listings__block">
        <div className="listings__block__container">
          {PRODUCT.map((item, index) => {
            return (
              <ProductCard key={index} image={item?.image} name={item?.name} price={item?.price} />
            );
          })}
        </div>
      </div>
      <div className="listings__bottom">
        <Button
          style={{
              backgroundColor: "#F9F9F9",
              color: "#2A254B",
              width: "fit-content",
            }}
            content={"View Collection"}
          />
      </div>
    </div>
  );
};

export default Listings