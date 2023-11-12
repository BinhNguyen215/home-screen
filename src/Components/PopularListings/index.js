import React from 'react'
import { POPULAR } from '../../Const';
import PoplarProduct from '../PopularProducts';
import Button from "../Button";


const PopularListings = () => {
  return (
    <div className="PopularLists">
        <div className="PopularLists__top">
            <h1 className="PopularLists__title">Our popular products</h1>
        </div>
        <div className="PopularLists__block">
          <div className="PopularLists__block__container">
          {POPULAR.map((item, index) => {
            return (
              <PoplarProduct key={index} long={item?.long} image={item?.image} name={item?.name} price={item?.price} />
            );
          })}
          </div>
        </div>
        <div className="PopularLists__bottom">
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
  )
}

export default PopularListings