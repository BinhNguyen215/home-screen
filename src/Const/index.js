
import { ReactComponent as Delivery } from "../Icons/Delivery.svg";
import { ReactComponent as CheckMark } from "../Icons/CheckMark.svg";
import { ReactComponent as Purchase } from "../Icons/Purchase.svg";
import { ReactComponent as Sprout } from "../Icons/Sprout.svg";

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
  