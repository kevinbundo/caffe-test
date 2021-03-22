import React from "react";
import styled from "styled-components";

const UIButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  border-radius: 50px;
  padding: 5px 15px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-color: ${(props) => (props.variant === "withborder" ? props.color : null)};

  &:active {
    border: none;
  }
`;

const Button = ({ children, variant, color }) => {
  return (
    <UIButton color={color} variant={variant}>
      {children}
    </UIButton>
  );
};

export default Button;
