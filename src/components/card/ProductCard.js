import React, { useState } from "react";
import styled from "styled-components";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const UICProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 25px;
  background: white;
  margin-bottom: 5px;
  place-items: center;
  border-right: 5px solid #ebeced;

  &:nth-child(3n) {
    border-right: none;
  }
  img {
    width: 100%;
  }
  div {
    h3 {
      font-weight: 400;
      font-size: 15px;
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  input[type="checkbox"] {
    position: relative;
    width: 2.1em;
    height: 2.1em;
    color: $black;
    border: 2px solid #ebeced;
    border-radius: 4px;
    appearance: none;
    outline: 0;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 2px;
      left: 7px;
      width: 8px;
      height: 14px;
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.primary};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
      background: none;
      &::before {
        opacity: 1;
      }
    }
  }
`;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    if (!checked) {
      dispatch(addToCart(data));
    } else {
      dispatch(removeFromCart(data));
    }
  };

  return (
    <UICProductCard>
      <img src={data.image} alt={data.title} />

      <div>
        <h3>{data.title}</h3>
        <p>€ {String(data.price).replace(".", ",")}</p>
      </div>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </UICProductCard>
  );
};

export default ProductCard;
