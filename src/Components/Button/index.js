import React from "react";

const Button = ({ content, onClick, ...props }) => {
  return (
    <button className="button" {...props}>
      {content}
    </button>
  );
};

export default Button;