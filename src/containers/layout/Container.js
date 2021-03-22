import React from "react";
import styled from "styled-components";

const UIConatiner = styled.div`
  max-width: 1136px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <UIConatiner>{children}</UIConatiner>;
};

export default Container;
