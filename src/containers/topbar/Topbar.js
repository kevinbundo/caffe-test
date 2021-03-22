import React from "react";
import styled from "styled-components";
import { Icon, Info } from "../../components";
import Button from "../../components/base/Button";
import { Container } from "../../containers";

const UITopbar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

const UITopbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.sizes.topBarHeight};
`;

const UITopbarInfo = styled.div`
  display: flex;
  color: white;
  align-items: center;
  div {
    margin-right: 30px;
  }
`;

const Topbar = () => {
  return (
    <UITopbar>
      <Container>
        <UITopbarWrapper>
          <UITopbarInfo>
            <Info icon="fa-phone">+39 0541 082543 </Info>
            <Info icon="fa-envelope">info@bpoint.store </Info>
          </UITopbarInfo>

          <UITopbarInfo>
            <div>
              <Icon count={8} name="fa-bell" />
            </div>
            <div>
              <Icon count={5} name="fa-envelope" />
            </div>
            <div>
              <Icon name="fa-cog" />
            </div>
            <div>
              Rngalassi &nbsp;
              <span>794,00€</span>
            </div>
            <Button color="white" variant="withborder">
              Logout
            </Button>
          </UITopbarInfo>
        </UITopbarWrapper>
      </Container>
    </UITopbar>
  );
};

export default Topbar;
