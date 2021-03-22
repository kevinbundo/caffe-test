import React from "react";
import styled from "styled-components";
import cx from "classnames";

const UIIcon = styled.i`
  position: relative;
  font-size: inherit;
`;

const UIIconCount = styled.span`
  position: absolute;
  top: -10px;
  right: -12px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
`;

const Icon = ({ name, count }) => {
  return (
    <UIIcon className={cx("fa", name)}>{count ? <UIIconCount>{count}</UIIconCount> : null}</UIIcon>
  );
};

export default Icon;
