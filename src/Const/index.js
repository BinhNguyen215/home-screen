
import { ReactComponent as Delivery } from "../Icons/Delivery.svg";
import { ReactComponent as CheckMark } from "../Icons/CheckMark.svg";
import { ReactComponent as Purchase } from "../Icons/Purchase.svg";
import { ReactComponent as Sprout } from "../Icons/Sprout.svg";
import { ReactComponent as In } from "../Icons/In.svg";
import { ReactComponent as Facebook } from "../Icons/Facebook.svg";
import { ReactComponent as Instagram } from "../Icons/Instagram.svg";
import { ReactComponent as Skype } from "../Icons/Skype.svg";
import { ReactComponent as  Twitter } from "../Icons/Twitter.svg";
import { ReactComponent as  Pinterest } from "../Icons/Pinterest.svg";

export const NAVIGATORS = [
    {
      content: "Plant pots",
      to: "/",
    },
    {
      content: "Ceramics",
      to: "/",
    },
    {
      content: "Tables",
      to: "/",
    },
    {
      content: "Chairs",
      to: "/",
    },
    {
      content: "Crockery",
      to: "/",
    },
    {
      content: "Tableware",
      to: "/",
    },
    {
      content: "Cutlery",
      to: "/",
    },
  ];

  export const BLOCKS = [
    {
      icon: <Delivery />,
      title: "Next day as standard",
      content: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <CheckMark />,
      title: "Made by true artisans",
      content: "Handmade crafted goods made with real passion and craftmanship",
    },
    {
      icon: <Purchase />,
      title: "Unbeatable prices",
      content: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      icon: <Sprout />,
      title: "Recycled packaging",
      content: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ];

  export const PRODUCT = [
    {
      image: require("../Images/Chair.jpg"),
      name: "The Dandy chair",
      price: "£250",
    },
    {
      image: require("../Images/Vase.jpg"),
      name: "Rustic Vase Set",
      price: "£155",
    },
    {
      image: require("../Images/LongVase.jpg"),
      name: "The Silky Vase",
      price: "£125",
    },
    {
      image: require("../Images/Lamp.jpg"),
      name: "The Lucy Lamp",
      price: "£399",
    },
  ];
  
  export const POPULAR = [
    {
      long : true,
      image: require("../Images/Sofa.jpg"),
      name: "The Poplar suede sofa",
      price: "£980",
    },
    {
      long : false,
      image: require("../Images/Chair.jpg"),
      name: "The Dandy chair",
      price: "£250",
    },
    {
      long : false,
      image: require("../Images/BlackChair.jpg"),
      name: "The Dandy chair",
      price: "£250",
    },
  ];

  export const MENU = [
    {
      content: "New arrivals",
      to: "/",
    },
    {
      content: "Best sellers",
      to: "/",
    },
    {
      content: "Recently viewed",
      to: "/",
    },
    {
      content: "Popular this week",
      to: "/",
    },
    {
      content: "All products",
      to: "/",
    },
  ];

  export const CATEGORIES = [
    {
      content: "Crockery",
      to: "/",
    },
    {
      content: "Furniture",
      to: "/",
    },
    {
      content: "Homeware",
      to: "/",
    },
    {
      content: "Plant pots",
      to: "/",
    },
    {
      content: "Chairs",
      to: "/",
    },
  ];

  export const ABOUT = [
    {
      content: "About us",
      to: "/",
    },
    {
      content: "Vacancies",
      to: "/",
    },
    {
      content: "Contact us",
      to: "/",
    },
    {
      content: "Privacy",
      to: "/",
    },
    {
      content: "Returns policy",
      to: "/",
    },
  ];

  export const CONTACT = [
    {
      icon: <In />,
    },
    {
      icon: <Facebook />,
    },
    {
      icon: <Instagram />,
    },
    {
      icon: <Skype />,
    },
    {
      icon: <Twitter />,
    },
    {
      icon: <Pinterest />,
    },
  ];
  
  
  