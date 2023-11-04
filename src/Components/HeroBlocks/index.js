import React from "react";
import Button from "../Button";

const HeroBlock = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__purple">
          <div className="hero__purple__container">
            <div className="hero__purple__top">   
              <h1>The furniture brand for the future, with timeless designs</h1>
              <Button
                style={{
                  backgroundColor: "#F9F9F926",
                  color: "#FFF",
                  width: "fit-content",
                }}
                content={"View Collection"}
              />
            </div>

            <div className="hero__purple__bottom">
              <p>
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>   
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img alt="RightImage" src={require("../../Images/RightImage.jpg")} />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;