import React from 'react';

export const Input = ({ className, ...props }) => {
  return (
   <input
  className={`christmas-input ${className}`}
  style={{ width: '80%' }} // Adjust the width as needed
  {...props}
/>
  );
};