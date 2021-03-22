import React from "react";
import styled from "styled-components";
import FirstData from "../../assets/data1.svg";
import SecondData from "../../assets/data2.svg";
import ThirdData from "../../assets/data3.svg";
import { SubNav, Card, Icon } from "../../components";
import { Container, SubHeader } from "../../containers";

const UIStats = styled.section`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
`;

const UIStatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: #e2e3e3;
    font-size: 20px;
  }

  p {
    margin: 0;
    color: #e2e3e3;
    border: 1px solid #989a9a;
    padding: 3px 10px;
    border-radius: 50px;
  }
`;

const UIStatsBody = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 25px;
  div {
    max-width: 280px !important;
  }
  p {
    font-size: 10px;
  }
`;

const UIStatsMenu = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};

  > div {
    max-width: 1136px;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    height: 110px;

    margin-bottom: 0;
  }
  > p {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  }
  > li {
    border-right: 1px solid #272c31;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    padding-bottom: 15px;
  }
`;

const data = [
  { name: "Agenti", icon: "fa-user", total: 53 },
  { name: "Agenzie", icon: "fa-store", total: 175 },
  { name: "Utenti", icon: "fa-users", total: 2628 },
];
const menu = [
  { name: "Servizi", icon: "fa-user", active: true },
  { name: "SUPPORT", icon: "fa-headset", active: false },
  { name: "SHOP", icon: "fa-store", active: false },
  { name: "Contabilità", icon: "fa-wallet", active: false },
  { name: "Statistiche", icon: "fa-users", active: false },
  { name: "AREA DOWNLOAD", icon: "fa-users", active: false },
];

const UIGridMenu = styled.div`
  li {
    color: #a9a1a1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    list-style: none;
  }
  i {
    font-size: 30px;
  }

  p {
    text-transform: uppercase;
    margin: 0;
    margin-top: 5px;
  }
`;

const Stats = () => {
  return (
    <UIStats>
      <Container>
        <UIStatsHeader>
          <h2>
            <Icon name="fa-chart-bar" /> statistiCHE
          </h2>
          <p>
            23/06/2020 - 23/07/2020 &nbsp;
            <Icon name="fa-calendar-alt" />
          </p>
        </UIStatsHeader>
        <UIStatsBody>
          <Card total="8.258.66€" title="TRANSAZIONI TOTALI" data={FirstData} />
          <Card total="568.37€" title="COMMISIONI" data={SecondData} />
          <Card total="256.53€" title="PROVIGGIONI" data={ThirdData} />
          <Card total="256.53€" title="SALDO RETE" data={data} />
        </UIStatsBody>
      </Container>
      <UIStatsMenu>
        <UIGridMenu>
          {menu.map((item, i) => {
            if (i === 0) {
              return (
                <li key={i} className="firstliitem liborderright">
                  <Icon name={item.icon} />
                  <p>{item.name}</p>
                </li>
              );
            } else {
              return (
                <li key={i} className="liborderright">
                  <Icon name={item.icon} />
                  <p>{item.name}</p>
                </li>
              );
            }
          })}
        </UIGridMenu>
      </UIStatsMenu>
      <SubNav />
      <SubHeader />
    </UIStats>
  );
};

export default Stats;
