import React from "react";
import styled from "styled-components";
import { Icon } from "../../components";
import { useSelector } from "react-redux";

const UISubHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.font};
  height: 105px;
  box-shadow: 0 3px 10px #cccccc;
  margin: 0;

  h1 {
    margin: 0;
  }
`;

const UISubHeaderContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const UICaffe = styled.div`
  width: 66px;
  height: 101px;
  background-color: ${({ theme }) => theme.colors.caffe};
  color: white;
  text-align: center;
  align-items: center;
  display: grid;
  border-bottom: 4px solid #693c0f;
  i {
    font-size: 28px;
  }
`;
const UISubtotalHolder = styled.div`
  width: 314px;
  height: 105px;
  display: contents;
`;
const UISubtotal = styled.div`
  width: 137px;
  height: 105px;
  padding: 25px 17px;
  h1 {
    font-size: 14px;
    font-weight: 400;
  }
`;

const UIFreeShipping = styled.div`
  width: 100px;
  height: 105px;
  padding: 25px 17px;
  text-align: end;
  h1 {
    font-size: 14px;
  }
  .firstsubtotal {
    color: #f26521;
    font-size: 18px;
  }
`;
const UITotalHolder = styled.div`
  width: 189px;
  height: 105px;
  display: contents;

  p {
    font-size: 14px;
    margin: 0;
  }
  .firstsubtotal {
    color: #f26521;
    font-size: 30px;
  }
`;
const UIButtonHolder = styled.div`
  width: 567px;
  height: 105px;
  padding: 28px 0 28px 17px;
  margin-left: 7px;
  text-align: end;
`;

const UIButton1 = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #d9d9d9;

  border-radius: 4px;
  width: 275px;
  height: 44px;
  margin-right: 20px;

  font-size: 14px;

  i {
    margin-right: 5px;
  }
  p {
    color: red;
  }
`;
const UIButton2 = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #f26521;
  color: #f26521;
  width: 245px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;

  i {
    margin-right: 5px;
  }
`;

const SubHeader = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <UISubHeader>
      <UISubHeaderContainer>
        <UICaffe>
          <Icon name="fa-coffee" />
        </UICaffe>
        <UISubtotalHolder>
          <UISubtotal>
            <h1>SUBTOTAL</h1>
            <h1>SHIPPING</h1>
            <h1>TAX</h1>
          </UISubtotal>
          <UIFreeShipping>
            <h1 className="firstsubtotal">{cart.totalPrice} €</h1>
            <h1>FREE SHIPPING</h1>
            <h1>20,00€ </h1>
          </UIFreeShipping>
        </UISubtotalHolder>
        <UITotalHolder>
          <UISubtotal>
            <p>TOTAL</p>

            <h1 className="firstsubtotal">€ {cart.totalPrice > 0 ? cart.totalPrice + 20 : 0}</h1>
          </UISubtotal>
          <UIButtonHolder>
            <UIButton1>
              <Icon name="fa-truck" /> DETTAGLI PER LA SPEDIZIONE
            </UIButton1>
            <UIButton2>
              <Icon name="fa-wallet" /> PAGA CON BPOINT WALLET
            </UIButton2>
          </UIButtonHolder>
        </UITotalHolder>
      </UISubHeaderContainer>
    </UISubHeader>
  );
};

export default SubHeader;
