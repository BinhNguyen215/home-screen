import React from 'react'
import { ABOUT, CATEGORIES, CONTACT, MENU } from '../../Const';
import MenuLink from "../MenuLink";
import CategoriesLink from '../CategoriesLink';
import AboutLink from '../AboutLink';
import Button from '../Button';
import ContactLink from '../ContactLink';

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer__top">
            <div className="Footer__menu">
                <div className="Footer__menu__container">
                    <h1>Menu</h1>
                    {MENU.map((nav, index) => {
                        return (
                            <MenuLink key={index} to={nav?.to} content={nav?.content} />
                        );
                    })}
                </div>
            </div>
            <div className="Footer__categories">
                <div className="Footer__categories__container">
                    <h1>Categories</h1>
                    {CATEGORIES.map((nav, index) => {
                        return (
                            <CategoriesLink key={index} to={nav?.to} content={nav?.content} />
                        );
                    })}
                </div>
            </div>
            <div className="Footer__about">
                <div className="Footer__about__container">
                    <h1>Our company</h1>
                    {ABOUT.map((nav, index) => {
                        return (
                            <AboutLink key={index} to={nav?.to} content={nav?.content} />
                        );
                    })}
                </div>
            </div>
            <div className="Footer__signup">
                    {/* <h1>Join our mailing list</h1> */}
                <input placeholder="your@email.com">
                </input>
                <Button
                style={{
                  backgroundColor: "#FFF",
                  color: "#2A254B",
                  width: "fit-content",
                }}
                content={"Sign up"}
              />
            </div>
        </div>
        <div className="Footer__seperator"></div>
        <div className="Footer__bottom">
            <div className="Footer__bottom__right-content">
                <h1>Copyright 2022 Avion LTD</h1>
            </div>
            <div className="Footer__bottom__right-content">
                {CONTACT.map((nav, index) => {
                    return (
                        <ContactLink key={index} to={nav?.to} icon={nav?.icon} />
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer