import React from "react";

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`christmas-button ${className}`} // Add the christmas-button class
      {...props}
    >
      {children}
    </button>
  );
};
