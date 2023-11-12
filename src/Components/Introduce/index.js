import React from 'react'
import Button from '../Button'
const Introduce = () => {
  return (
    <div className="Intro">
        <div className="Intro__container">
            <div className="Intro__content">
                <div className="Intro__content__container">
                    <div className="Intro__content__top">
                        <h1>From a studio in London to a global brand with over 400 outlets</h1>
                        <p>
                            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
                            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
                        </p> 
                    </div>
                    <div className="Intro__content__bottom">
                    <Button
                        style={{
                            backgroundColor: "#F9F9F9",
                            color: "#2A254B",
                            width: "fit-content",
                            }}
                            content={"Get in touch"}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="Intro__image">
            <img alt="Intro" src={require("../../Images/Intro.jpg")} />
        </div>
    </div>
  )
}

export default Introduce