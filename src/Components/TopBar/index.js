import React from 'react'
import IconButton from "../IconButton";
import { ReactComponent as Search } from "../../Icons/Search.svg";
import { ReactComponent as Cart } from "../../Icons/Cart.svg";
import { ReactComponent as UserAvatar } from "../../Icons/UserAvatar.svg";
import NavigationLink from "../NavigationLink";
import { NAVIGATORS } from "../../Const";

const TopBar = () => {
    return (
      <div className="top-bar">
        <div className="top-bar__top">
          <div className="top-bar__top__right-content">
            <IconButton svg={<Search />} />
            <IconButton className="invisible" svg={<Search />} />
          </div>
          <h1 className="top-bar__logo">Avion</h1>
          <div className="top-bar__top__right-content">
            <IconButton svg={<Cart />} />
            <IconButton svg={<UserAvatar />} />
          </div>
        </div>
        <div className="top-bar__seperator"></div>
        <div className="top-bar__bottom">
          <div className="top-bar__bottom__container">
            {NAVIGATORS.map((nav, index) => {
              return (
                <NavigationLink key={index} to={nav?.to} content={nav?.content} />
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default TopBar;