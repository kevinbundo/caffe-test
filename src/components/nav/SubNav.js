import React from "react";
import styled from "styled-components";
import { Container } from "../../containers";

const UISubnav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
`;

const UISubnavUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  place-items: center;
  margin: 0;
  height: 50px;
  margin-left: -40px !important;
  grid-gap: 10px;

  li {
    text-transform: uppercase;
    font-weight: 300;
    border-right: 1px solid #de5817;
    width: -webkit-fill-available;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
`;

const SubNav = () => {
  const navItems = [
    "ricariche",
    "pagamenti",
    "gift cards",
    "spedizioni",
    "prenotazioni",
    "voucher",
  ];

  return (
    <UISubnav>
      <Container>
        <UISubnavUl>
          {navItems.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </UISubnavUl>
      </Container>
    </UISubnav>
  );
};

export default SubNav;
