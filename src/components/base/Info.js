import React from "react";
import styled from "styled-components";
import { Icon } from "../index";

const UIInfo = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

const UIInfoBody = styled.span`
  margin-right: 15px;
  margin-left: 10px;
`;

const Info = ({ children, icon, count }) => {
  return (
    <UIInfo>
      <Icon count={count} name={icon} />
      <UIInfoBody>{children}</UIInfoBody>
    </UIInfo>
  );
};

export default Info;
