import React from 'react';

interface IButtonProps {
  type?: "submit" | "button" | "reset" ;
}

const Button: React.FC<IButtonProps> = ({type, children}) => {
  return(
    <button type={type}>{children}</button>
  )
};

export default Button;