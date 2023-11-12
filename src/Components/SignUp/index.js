import React from 'react'
import Button from '../Button'

const SignUp = () => {
  return (
    <div className="SignUp">
        <div className="SignUp__container">
            <div className="SignUp__container__top">
                <h1>Join the club and get the benefits</h1>
                <p>
                    Sign up for our newsletter and receive exclusive offers on new
                    ranges, sales, pop up stores and more
                </p>
            </div>
            <div className="SignUp__container__bottom">
              <input placeholder="your@email.com">
              </input>
              <Button
                style={{
                  backgroundColor: "#2A254B",
                  color: "#FFF",
                  width: "fit-content",
                }}
                content={"Sign up"}
              />
            </div>
        </div>
    </div>
  )
}

export default SignUp